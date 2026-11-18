// Loads the repository's data at build time: ideologies, questions, tests, camps, axes, levels.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { gridOf, pointOf, ideologyColour, campOf, COLS, ROWS, CENTER } from './compass.js';

const ROOT = process.cwd();
const readYaml = (p) => yaml.load(fs.readFileSync(path.join(ROOT, p), 'utf8'));

function order(ide) {
  const g = gridOf(ide.place);
  if (g.kind === 'cell') return g.row * 100 + g.col;
  if (g.kind === 'center') return 10000;
  return 20000 + ['tl', 'top', 'tr', 'left', 'right', 'bl', 'bottom', 'br'].indexOf(ide.place.ring) * 100 + (ide.place.at ?? 0);
}

export const ideologies = fs
  .readdirSync(path.join(ROOT, 'data/ideologies'))
  .filter((f) => f.endsWith('.yaml'))
  .map((f) => readYaml(`data/ideologies/${f}`))
  .sort((a, b) => order(a) - order(b));

export const byId = new Map(ideologies.map((i) => [i.id, i]));
export const colourOf = (ide) => ideologyColour(ide);

export const questionList = readYaml('data/questions.yaml').questions;
export const questions = Object.fromEntries(questionList.map((q) => [q.id, q]));
export const tests = readYaml('data/tests.yaml');
export const camps = readYaml('data/camps.yaml').camps;
export const axes = readYaml('data/axes.yaml').axes;
export const levels = readYaml('data/levels.yaml').levels;
export const subaxes = readYaml('data/subaxes.yaml').subaxes;
export const levelOf = (lv) => levels.find((l) => l.level === lv);


export const childrenOf = (id) => ideologies.filter((i) => (i.parents || []).includes(id));

/** which of the nine camps an on-chart ideology sits in; null for the centre block and the ring */
export function campIndex(ide) {
  if (ide.place.ring || ide.place.center) return null;
  const pt = pointOf(ide);
  return campOf(pt);
}
export const campAt = (col, row) => camps.find((c) => c.col === col && c.row === row);

/** nearest on-chart neighbours (chart distance only) */
export function neighbours(ide, n = 6) {
  if (ide.place.ring) return [];
  const g = gridOf(ide.place);
  return ideologies
    .filter((o) => o.id !== ide.id && !o.place.ring)
    .map((o) => {
      const h = gridOf(o.place);
      return { o, d: Math.hypot(h.c - g.c, h.r - g.r) };
    })
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map((e) => e.o);
}

/** the minimum the browser needs to score and draw */
export function clientData(lang) {
  return {
    lang,
    version: tests.version,
    ideologies: ideologies.map((i) => ({
      id: i.id, name: i.name, motto: i.motto, level: i.level, place: i.place,
    })),
    questions: Object.fromEntries(questionList.map((q) => [q.id, { effects: q.effects, sub: q.sub, text: q.text }])),
    tests: {
      quick: tests.quick.questions, full: tests.full.questions,
      ...(tests.pro ? { pro: tests.pro.questions, proPool: tests.pro.followups.pool, proAsk: tests.pro.followups.ask, proVersion: tests.pro.version } : {}),
    },
    subaxes,
    camps,
    axes: axes.map((a) => ({ key: a.key, neg: a.neg, pos: a.pos, title: a.title })),
    levels,
  };
}

export { COLS, ROWS, CENTER, gridOf, pointOf };

/** The wiki's categories: the nine camps (in reading order), the centre, the ring. */
export function wikiGroups() {
  const out = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const camp = campAt(col, row);
      out.push({
        key: `camp-${col}-${row}`, name: camp.name, text: camp.text, col, row,
        items: ideologies.filter((i) => { const k = campIndex(i); return k && k.col === col && k.row === row; }),
      });
    }
  }
  out.push({ key: 'center', name: { en: 'The centre', zh: '正中央' }, text: { en: 'The block in the middle of the chart, for those who refuse every axis.', zh: '图正中间的大格，属于拒绝站队的人。' }, items: ideologies.filter((i) => i.place.center) });
  out.push({ key: 'ring', name: { en: 'Ring titles', zh: '外圈称号' }, text: { en: 'Titles outside the chart, earned in the full test by going to an extreme on one or more axes.', zh: '图外圈的称号，在完整版测试里某根或几根轴走到极端时获得。' }, items: ideologies.filter((i) => i.place.ring) });
  return out;
}
export const groupOf = (ide) => wikiGroups().find((g) => g.items.some((i) => i.id === ide.id));
/** a representative colour for a camp: the cell nearest its middle */
export function groupColour(g) {
  if (g.key === 'center') return '#cfd2d6';
  if (g.key === 'ring') return '#e08a1e';
  const mid = g.items.find((i) => i.level === 5) || g.items[Math.floor(g.items.length / 2)];
  return colourOf(mid).bg;
}
