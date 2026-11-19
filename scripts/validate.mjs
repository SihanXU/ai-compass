// Checks the repository's data before every build and on every pull request.
// Run: npm run validate. Exits 1 and lists every problem it finds.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { z } from 'zod';
import { COLS, ROWS, CENTER, AXIS_KEYS, SUB_KEYS } from '../src/lib/compass.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const errors = [];
const warn = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const read = (p) => yaml.load(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const pair = z.object({ en: z.string().min(1), zh: z.string().min(1) }).strict();
const axis = z.enum(AXIS_KEYS);
const cond = z.string().regex(/^[<>]-?\d*\.?\d+$/, 'like ">0.6" or "<-0.7"');
const id = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'lowercase words joined by hyphens');

const Place = z.union([
  z.object({ col: z.number().int().min(0).max(COLS - 1), row: z.number().int().min(0).max(ROWS - 1) }).strict(),
  z.object({ center: z.literal(true) }).strict(),
  z.object({
    ring: z.enum(['tl', 'tr', 'bl', 'br', 'top', 'bottom', 'left', 'right']),
    at: z.number().int().min(0).optional(),
    when: z.record(axis, cond).refine((o) => Object.keys(o).length > 0, 'needs at least one condition'),
  }).strict(),
]);
const Ideology = z.object({
  id,
  name: pair,
  motto: pair,
  level: z.number().int().min(1).max(9),
  kind: z.enum(['core', 'topic']).optional(),
  anchor: z.object({ x: z.number().min(-1).max(1), y: z.number().min(-1).max(1), p: z.number().min(-1).max(1) }).strict().optional(),
  point: z.object({ x: z.number().min(-1).max(1), y: z.number().min(-1).max(1), p: z.number().min(-1).max(1) }).strict().optional(),
  place: Place,
  parents: z.array(id).default([]),
  relations: z.object({ allies: z.array(id).default([]), frenemies: z.array(id).default([]), rivals: z.array(id).default([]) }).strict(),
  works: z.array(z.object({ title: z.string().min(1), year: z.number().int().min(1900).max(2100), url: z.string().url().optional() }).strict()).default([]),
}).strict();

// ---------------------------------------------------------------- ideologies
const dir = path.join(ROOT, 'data/ideologies');
const ideologies = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.yaml'))) {
  const where = `data/ideologies/${f}`;
  let raw;
  try { raw = read(where); } catch (e) { err(where, `not valid YAML (${e.message.split('\n')[0]})`); continue; }
  const r = Ideology.safeParse(raw);
  if (!r.success) { r.error.issues.forEach((i) => err(where, `${i.path.join('.') || '(root)'}: ${i.message}`)); continue; }
  if (r.data.id !== f.replace(/\.yaml$/, '')) err(where, `id "${r.data.id}" must match the file name`);
  ideologies.push(r.data);
}
const ids = new Set(ideologies.map((i) => i.id));

// places: every inner cell filled exactly once, the centre once, ring spots unique
const taken = new Map();
const inCenter = (c, r) => c >= CENTER.c0 && c <= CENTER.c1 && r >= CENTER.r0 && r <= CENTER.r1;
for (const i of ideologies) {
  const p = i.place;
  const key = p.center ? 'center' : p.ring ? `ring:${p.ring}:${p.at ?? ''}` : `${p.col},${p.row}`;
  if (!p.center && !p.ring && inCenter(p.col, p.row)) err(i.id, `cell ${key} is inside the centre block`);
  if (p.ring && ['top', 'bottom'].includes(p.ring) && (p.at === undefined || p.at >= COLS)) err(i.id, `ring ${p.ring} needs at in 0..${COLS - 1}`);
  if (p.ring && ['left', 'right'].includes(p.ring) && (p.at === undefined || p.at >= ROWS)) err(i.id, `ring ${p.ring} needs at in 0..${ROWS - 1}`);
  if (taken.has(key)) err(i.id, `place ${key} is already taken by ${taken.get(key)}`);
  taken.set(key, i.id);
}
for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (!inCenter(c, r) && !taken.has(`${c},${r}`)) err('chart', `cell col ${c}, row ${r} is empty`);
if (!taken.has('center')) err('chart', 'the centre block is empty');
for (const i of ideologies) if (!i.place.ring && !i.kind) err(`data/ideologies/${i.id}.yaml`, 'needs kind: core or topic');

// references
for (const i of ideologies) {
  const refs = [...i.parents.map((x) => ['parents', x]), ...Object.entries(i.relations).flatMap(([k, l]) => l.map((x) => [`relations.${k}`, x]))];
  for (const [k, x] of refs) {
    if (!ids.has(x)) err(`data/ideologies/${i.id}.yaml`, `${k}: no ideology "${x}"`);
    if (x === i.id) err(`data/ideologies/${i.id}.yaml`, `${k}: refers to itself`);
  }
}

// ---------------------------------------------------------------- wiki prose
const HEADINGS = { en: ['Beliefs', 'Arguments', 'Critiques'], zh: ['主张', '论据', '批评'] };
for (const lang of ['en', 'zh']) {
  for (const i of ideologies) {
    const where = `content/wiki/${lang}/${i.id}.md`;
    const file = path.join(ROOT, where);
    if (!fs.existsSync(file)) { err(where, 'missing'); continue; }
    const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    const m = /^---\n([\s\S]*?)\n---\n/.exec(text);
    if (!m) { err(where, 'needs front matter with a summary'); continue; }
    let fm;
    try { fm = yaml.load(m[1]); } catch (e) { err(where, 'front matter is not valid YAML'); continue; }
    if (!fm || typeof fm.summary !== 'string' || !fm.summary.trim()) err(where, 'front matter needs a summary');
    for (const h of HEADINGS[lang]) if (!new RegExp(`^## ${h}\\s*$`, 'm').test(text)) err(where, `missing heading "## ${h}"`);
  }
  const dirL = path.join(ROOT, 'content/wiki', lang);
  if (fs.existsSync(dirL)) for (const f of fs.readdirSync(dirL)) if (!ids.has(f.replace(/\.md$/, ''))) err(`content/wiki/${lang}/${f}`, 'no ideology with this id');
}

// ---------------------------------------------------------------- questions, tests, camps, axes, levels
const Question = z.object({ id: z.string().min(1), effects: z.record(axis, z.number().min(-1).max(1)).refine((o) => Object.keys(o).length > 0), sub: z.record(axis, z.string()).optional(), text: pair }).strict();
const qfile = read('data/questions.yaml');
const qids = new Set();
for (const q of qfile.questions || []) {
  const r = Question.safeParse(q);
  if (!r.success) r.error.issues.forEach((x) => err(`data/questions.yaml ${q.id ?? '?'}`, `${x.path.join('.')}: ${x.message}`));
  if (qids.has(q.id)) err('data/questions.yaml', `duplicate id ${q.id}`);
  qids.add(q.id);
}
const subaxes = read('data/subaxes.yaml').subaxes || {};
const SUBS = Object.fromEntries(Object.entries(subaxes).map(([k, l]) => [k, new Set(l.map((x) => x.key))]));
for (const q of qfile.questions || []) {
  for (const a of Object.keys(q.effects || {})) {
    const sk = q.sub?.[a];
    if (!sk) err(`data/questions.yaml ${q.id}`, `needs sub.${a} (a sub-dimension of axis ${a})`);
    else if (!SUBS[a]?.has(sk)) err(`data/questions.yaml ${q.id}`, `sub.${a}: "${sk}" is not a sub-dimension of ${a} in data/subaxes.yaml`);
  }
}
const SUB_ORDER = Object.entries(subaxes).flatMap(([k, l]) => l.map((x) => `${k}.${x.key}`)).join();
if (SUB_ORDER !== SUB_KEYS.join()) err('data/subaxes.yaml', `sub-dimensions must be, in order: ${SUB_KEYS.join(', ')} (SUB_KEYS in src/lib/compass.js)`);
const tests = read('data/tests.yaml');
if (!Number.isInteger(tests.version)) err('data/tests.yaml', 'version must be an integer');
for (const mode of ['quick', 'full']) {
  const list = tests[mode]?.questions || [];
  if (!list.length) err('data/tests.yaml', `${mode} has no questions`);
  if (new Set(list).size !== list.length) err('data/tests.yaml', `${mode} repeats a question`);
  for (const q of list) if (!qids.has(q)) err('data/tests.yaml', `${mode}: no question "${q}"`);
}
if (tests.pro) {
  const core = tests.pro.questions || [], pool = tests.pro.followups?.pool || [];
  if (!Number.isInteger(tests.pro.version)) err('data/tests.yaml', 'pro.version must be an integer');
  if (!Number.isInteger(tests.pro.followups?.ask) || tests.pro.followups.ask > pool.length) err('data/tests.yaml', 'pro.followups.ask must be an integer no larger than the pool');
  if (new Set([...core, ...pool]).size !== core.length + pool.length) err('data/tests.yaml', 'pro repeats a question, or uses one both as core and as follow-up');
  for (const q of [...core, ...pool]) if (!qids.has(q)) err('data/tests.yaml', `pro: no question "${q}"`);
  // balance per sub-dimension in the pro core
  const byId = Object.fromEntries((qfile.questions || []).map((q) => [q.id, q]));
  const tally = {};
  for (const id of core) for (const [a, w] of Object.entries(byId[id]?.effects || {})) {
    const k = `${a}.${byId[id].sub?.[a]}`; tally[k] ??= [0, 0]; tally[k][w > 0 ? 0 : 1]++;
  }
  for (const k of SUB_KEYS) {
    const [pos, neg] = tally[k] || [0, 0];
    if (pos + neg < 4) err('data/tests.yaml', `pro: sub-dimension ${k} has only ${pos + neg} statements (needs at least 4)`);
    else if (Math.abs(pos - neg) > 2) warn.push(`pro: ${k} has ${pos} statements pushing + and ${neg} pushing − (keep them within 2)`);
  }
}
const camps = read('data/camps.yaml').camps || [];
if (camps.length !== 9) err('data/camps.yaml', 'needs exactly nine camps');
for (let c = 0; c < 3; c++) for (let r = 0; r < 3; r++) if (!camps.find((x) => x.col === c && x.row === r)) err('data/camps.yaml', `no camp at col ${c}, row ${r}`);
const axes = read('data/axes.yaml').axes || [];
if (axes.map((a) => a.key).join() !== AXIS_KEYS.join()) err('data/axes.yaml', `axes must be ${AXIS_KEYS.join(', ')} in order`);
const levels = read('data/levels.yaml').levels || [];
if (levels.length !== 9) err('data/levels.yaml', 'needs nine levels');

// balance: on each axis, how many statements push each way when agreed with
for (const k of AXIS_KEYS) {
  const list = (qfile.questions || []).filter((q) => tests.full.questions.includes(q.id) && q.effects[k]);
  const pos = list.filter((q) => q.effects[k] > 0).length;
  const neg = list.length - pos;
  if (Math.abs(pos - neg) > 2) warn.push(`axis ${k}: ${pos} statements push to + and ${neg} to − (keep them within 2)`);
}


warn.forEach((w) => console.warn(`warning  ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`error    ${e}`));
  console.error(`\n${errors.length} problem(s).`);
  process.exit(1);
}
console.log(`ok  ${ideologies.length} ideologies, ${qids.size} questions, ${camps.length} camps`);
