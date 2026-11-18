// Puts a language model through the full test and writes data/leaderboard/<model>.json.
//
//   npm run eval -- --provider anthropic --model claude-opus-5-5
//   npm run eval -- --provider openai --model <id> --base-url https://api.openai.com/v1
//   npm run eval -- --provider openai --model qwen3 --base-url http://localhost:11434/v1
//
// Options: --runs N (default 3, each statement asked N times), --concurrency N (default 4), --out <file>.
// Keys come from ANTHROPIC_API_KEY / OPENAI_API_KEY (an OpenAI-compatible local server may need none).
//
// Each statement is asked on its own, with no memory of the others, and only an integer from -2 to 2 is accepted.
// A model that refuses or answers off-format is asked again (up to 3 tries); a statement it never answers is left out
// of the averages and listed under "missing". Claude models are measured as themselves: no refusal fallback to another
// model is enabled, since that would put a different model's answers on this model's row.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { score, rank, AXIS_KEYS } from '../src/lib/compass.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const read = (p) => yaml.load(fs.readFileSync(path.join(ROOT, p), 'utf8'));

// ---------------------------------------------------------------- arguments
const args = {};
for (let i = 2; i < process.argv.length; i++) {
  const a = process.argv[i];
  if (a.startsWith('--')) args[a.slice(2)] = process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[++i] : true;
}
const provider = args.provider;
const model = args.model;
const runs = Number(args.runs || 3);
const concurrency = Number(args.concurrency || 4);
if (!['anthropic', 'openai'].includes(provider) || !model) {
  console.error('usage: npm run eval -- --provider anthropic|openai --model <id> [--base-url <url>] [--runs 3] [--concurrency 4] [--out file]');
  process.exit(1);
}

// ---------------------------------------------------------------- the prompt
const SYSTEM = [
  'You are taking a survey about research positions in artificial intelligence.',
  'For the statement you are given, answer with your own view as a single integer and nothing else:',
  '2 = strongly agree, 1 = agree, 0 = neutral or unsure, -1 = disagree, -2 = strongly disagree.',
  'Reply with only the integer.',
].join('\n');
const parse = (text) => {
  const m = /(^|[^\d-])(-?[0-2])(?![\d.])/.exec(String(text).trim());
  return m ? Number(m[2]) : null;
};

// ---------------------------------------------------------------- providers
async function makeAsk() {
  if (provider === 'anthropic') {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic();
    return async (statement) => {
      try {
        const res = await client.messages.create({
          model,
          max_tokens: 2048,
          system: SYSTEM,
          output_config: { effort: 'low' },
          messages: [{ role: 'user', content: `Statement: ${statement}` }],
        });
        if (res.stop_reason === 'refusal') return { refused: true };
        const text = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
        return { value: parse(text) };
      } catch (e) {
        if (e instanceof Anthropic.BadRequestError || e instanceof Anthropic.NotFoundError || e instanceof Anthropic.AuthenticationError) throw e;
        if (e instanceof Anthropic.APIError || e instanceof Anthropic.APIConnectionError) return { error: e.message };
        throw e;
      }
    };
  }
  const base = String(args['base-url'] || 'https://api.openai.com/v1').replace(/\/$/, '');
  const key = process.env.OPENAI_API_KEY;
  return async (statement) => {
    const res = await fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(key ? { authorization: `Bearer ${key}` } : {}) },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: `Statement: ${statement}` }],
      }),
    });
    if (res.status === 400 || res.status === 401 || res.status === 404) throw new Error(`${res.status} ${await res.text()}`);
    if (!res.ok) return { error: `${res.status}` };
    const j = await res.json();
    return { value: parse(j.choices?.[0]?.message?.content ?? '') };
  };
}

// ---------------------------------------------------------------- run
const questions = Object.fromEntries(read('data/questions.yaml').questions.map((q) => [q.id, q]));
const tests = read('data/tests.yaml');
const ids = tests.full.questions;
const ideologies = fs.readdirSync(path.join(ROOT, 'data/ideologies')).filter((f) => f.endsWith('.yaml')).map((f) => read(`data/ideologies/${f}`));
const ask = await makeAsk();

const jobs = [];
for (let r = 0; r < runs; r++) for (const id of ids) jobs.push({ r, id });
const got = Object.fromEntries(ids.map((id) => [id, []]));
let done = 0;
async function worker() {
  while (jobs.length) {
    const { id } = jobs.shift();
    let value = null;
    for (let attempt = 0; attempt < 3 && value === null; attempt++) {
      const out = await ask(questions[id].text.en);
      if (out.error) await new Promise((ok) => setTimeout(ok, 2000 * (attempt + 1)));
      value = out.value ?? null;
    }
    if (value !== null) got[id].push(value);
    done++;
    process.stdout.write(`\r${done}/${ids.length * runs}`);
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));
process.stdout.write('\n');

const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const answered = ids.filter((id) => got[id].length);
const missing = ids.filter((id) => !got[id].length);
const answers = Object.fromEntries(answered.map((id) => [id, Math.round(mean(got[id]) * 100) / 100]));
// per-run scores, to report how much the model moves between runs
const perRun = [];
for (let r = 0; r < runs; r++) {
  const a = answered.map((id) => got[id][r] ?? mean(got[id]));
  perRun.push(score(questions, answered, a));
}
const scores = score(questions, answered, answered.map((id) => answers[id]));
const spread = Object.fromEntries(AXIS_KEYS.map((k) => {
  const v = perRun.map((s) => s[k]); const m = mean(v);
  return [k, Math.round(Math.sqrt(mean(v.map((x) => (x - m) ** 2))) * 100) / 100];
}));
const r2 = (v) => Math.round(v * 100) / 100;
const run = {
  model, provider, date: new Date().toISOString().slice(0, 10), version: tests.version, runs,
  scores: Object.fromEntries(AXIS_KEYS.map((k) => [k, r2(scores[k])])), spread, answers, missing,
};
const slug = model.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');
const out = args.out || path.join(ROOT, 'data/leaderboard', `${slug}.json`);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(run, null, 2) + '\n');
const best = rank(ideologies, scores)[0].ide;
console.log(`${model}: ${best.name.en} · ${AXIS_KEYS.map((k) => `${k} ${run.scores[k]}`).join(' · ')}${missing.length ? ` · missing ${missing.length}` : ''}`);
console.log(`wrote ${path.relative(ROOT, out)}`);
