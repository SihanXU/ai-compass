// Checks the link of every representative work, and finds links for works that have none.
//
//   node scripts/check-works.mjs          report only
//   node scripts/check-works.mjs --fix    also write the links it is sure of into data/ideologies/*.yaml
//
// arXiv links: the paper's title on arXiv must match the listed title. Works without a link (or with a wrong one)
// are looked up by exact title on arXiv, then on Crossref (journal papers, books). A link is written only when the
// titles match; everything else is listed for a human. Requests are paced to respect the services' limits.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const DIR = path.join(ROOT, 'data/ideologies');
const fix = process.argv.includes('--fix');
const UA = { 'User-Agent': 'ai-compass-link-check/1.0 (+https://github.com/SihanXU/ai-compass)' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// links that are not papers and that no index has
const KNOWN = {
  'how to control an agent with a growing behavior tree': 'https://sihanxu.me/harnesstree/',
  langchain: 'https://github.com/langchain-ai/langchain',
  'the society of mind': 'https://en.wikipedia.org/wiki/Society_of_Mind',
  'improving image generation with better captions': 'https://cdn.openai.com/papers/dall-e-3.pdf',
  'a mathematical framework for transformer circuits': 'https://transformer-circuits.pub/2021/framework/index.html',
  'stanley the robot that won the darpa grand challenge': 'https://doi.org/10.1002/rob.20147',
  'human level control through deep reinforcement learning': 'https://doi.org/10.1038/nature14236',
  'grandmaster level in starcraft ii using multi agent reinforcement learning': 'https://doi.org/10.1038/s41586-019-1724-z',
  'towards monosemanticity decomposing language models with dictionary learning': 'https://transformer-circuits.pub/2023/monosemantic-features/index.html',
  'translating embeddings for modeling multi relational data': 'https://papers.nips.cc/paper/5071-translating-embeddings-for-modeling-multi-relational-data',
  'a path towards autonomous machine intelligence': 'https://openreview.net/forum?id=BZ5a1r-kVsf',
  'language models are unsupervised multitask learners': 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
  'improving language understanding by generative pre training': 'https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf',
  'the embodied mind cognitive science and human experience': 'https://en.wikipedia.org/wiki/The_Embodied_Mind',
  'probabilistic robotics': 'http://www.probabilistic-robotics.org/',
  'ros an open source robot operating system': 'https://www.ros.org/',
  'video generation models as world simulators': 'https://openai.com/index/video-generation-models-as-world-simulators/',
};

const norm = (t) => t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, ' ').trim();
function same(a, b) {
  const x = norm(a), y = norm(b);
  if (!x || !y) return false;
  if (x === y || x.startsWith(y) || y.startsWith(x)) return true;
  const A = new Set(x.split(' ')), B = new Set(y.split(' '));
  const inter = [...A].filter((w) => B.has(w)).length;
  return inter / Math.max(A.size, B.size) >= 0.85;
}
const unxml = (s) => s.replace(/\s+/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
const arxivId = (url) => (/arxiv\.org\/(?:abs|pdf)\/([^\s?#v]+(?:v\d+)?)/.exec(url) || [])[1]?.replace(/v\d+$/, '').replace(/\.pdf$/, '');

async function get(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.ok) return r.text();
    await sleep(4000 * (i + 1));
  }
  return null;
}
function entries(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => ({
    id: (/<id>http:\/\/arxiv\.org\/abs\/([^<]+)<\/id>/.exec(m[1]) || [])[1]?.replace(/v\d+$/, ''),
    title: unxml((/<title>([\s\S]*?)<\/title>/.exec(m[1]) || [])[1] || ''),
    year: Number(((/<published>(\d{4})/.exec(m[1])) || [])[1]),
  }));
}

// ---------------------------------------------------------------- collect
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.yaml'));
const works = new Map(); // title → { title, year, url }
for (const f of files) for (const w of yaml.load(fs.readFileSync(path.join(DIR, f), 'utf8')).works || []) {
  if (!works.has(w.title)) works.set(w.title, { ...w });
}

// ---------------------------------------------------------------- verify arXiv links, 50 at a time
const withArxiv = [...works.values()].filter((w) => w.url && arxivId(w.url));
const verdict = new Map();
for (let i = 0; i < withArxiv.length; i += 50) {
  const batch = withArxiv.slice(i, i + 50);
  const xml = await get(`https://export.arxiv.org/api/query?id_list=${batch.map((w) => arxivId(w.url)).join(',')}&max_results=50`);
  const found = new Map(entries(xml || '').map((e) => [e.id, e]));
  for (const w of batch) {
    const e = found.get(arxivId(w.url));
    verdict.set(w.title, e && same(e.title, w.title) ? 'ok' : `wrong (${e ? `arXiv has "${e.title}"` : 'no such id'})`);
  }
  await sleep(3500);
}

// ---------------------------------------------------------------- look up the rest
const todo = [...works.values()].filter((w) => !w.url || (verdict.get(w.title) || '').startsWith('wrong'));
const found = new Map();
for (const w of todo) {
  const key = norm(w.title);
  if (KNOWN[key]) { found.set(w.title, KNOWN[key]); continue; }
  const q = encodeURIComponent(`ti:"${w.title.replace(/["]/g, '')}"`);
  const xml = await get(`https://export.arxiv.org/api/query?search_query=${q}&max_results=5`);
  await sleep(3500);
  const hit = entries(xml || '').find((e) => same(e.title, w.title));
  if (hit) { found.set(w.title, `https://arxiv.org/abs/${hit.id}`); continue; }
  const cr = await get(`https://api.crossref.org/works?query.bibliographic=${encodeURIComponent(w.title)}&rows=5&select=title,DOI,issued`);
  await sleep(1200);
  try {
    const items = JSON.parse(cr || '{}').message?.items || [];
    const m = items.find((it) => it.title?.[0] && same(it.title[0], w.title));
    if (m) found.set(w.title, `https://doi.org/${m.DOI}`);
  } catch { /* no match */ }
}

// ---------------------------------------------------------------- report and write
let ok = 0, wrong = 0, filled = 0;
const unresolved = [];
for (const w of works.values()) {
  const v = verdict.get(w.title);
  if (v === 'ok') ok++;
  if (v && v !== 'ok') { wrong++; console.log(`WRONG    ${w.title}\n         ${w.url} — ${v}${found.get(w.title) ? `\n         → ${found.get(w.title)}` : ''}`); }
  if (!w.url && found.get(w.title)) filled++;
  if ((!w.url || (v && v !== 'ok')) && !found.get(w.title)) unresolved.push(w);
}
console.log(`\n${works.size} works · arXiv links verified ${ok} · wrong ${wrong} · links found for ${filled} without one · unresolved ${unresolved.length}`);
unresolved.forEach((w) => console.log(`  no link: ${w.title} (${w.year})`));

if (fix) {
  for (const f of files) {
    const p = path.join(DIR, f);
    const text = fs.readFileSync(p, 'utf8');
    const doc = yaml.load(text);
    if (!doc.works?.length) continue;
    let changed = false;
    for (const w of doc.works) {
      const v = verdict.get(w.title);
      const u = found.get(w.title);
      const known = works.get(w.title);
      if (!w.url && known?.url && verdict.get(w.title) === 'ok') { w.url = known.url; changed = true; }
      else if (u && (!w.url || (v && v !== 'ok'))) { w.url = u; changed = true; }
      else if (v && v !== 'ok' && !u) { delete w.url; changed = true; }
    }
    if (!changed) continue;
    const block = 'works:\n' + doc.works.map((w) => `  - ${yaml.dump(w, { flowLevel: 0, lineWidth: 1000 }).trim()}`).join('\n') + '\n';
    fs.writeFileSync(p, text.replace(/^works:[\s\S]*$/m, block));
  }
  console.log('written');
}
