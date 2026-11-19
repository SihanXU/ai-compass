// Places every ideology on the chart from its own blind answers.
//
// Input: data/calibration/personas/<id>.json, {"answers": {statementId: -2..2}}: how a committed adherent of the
// ideology answers every statement, written from its wiki entry without seeing the axes (see CONTRIBUTING.md).
// Output: rewrites `place` (col, row) and `level` in data/ideologies/<id>.yaml, and data/calibration.yaml.
//
//   1. score each ideology on x, y, p from all its answers;
//   2. stretch each axis so the 90th percentile of |score| reaches the chart's edge (saved as calibration.scale);
//   3. assign ideologies to the 150 cells around the centre block so the total squared displacement is smallest
//      (Hungarian algorithm); the centre block keeps its ideology;
//   4. set each paradigm level from the stretched p score, and save each ideology's stretched point: people are
//      matched against these points, the cells only decide where an ideology is drawn.
// Ring titles keep their places and conditions (the conditions are reported); their levels come from their answers.
//
// Run: node scripts/calibrate.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { scoreMap, toChart, colX, rowY, COLS, ROWS, CENTER, meets } from '../src/lib/compass.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const read = (p) => yaml.load(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const dry = process.argv.includes('--dry');

const questions = Object.fromEntries(read('data/questions.yaml').questions.map((q) => [q.id, q]));
const ideologies = fs.readdirSync(path.join(ROOT, 'data/ideologies')).filter((f) => f.endsWith('.yaml'))
  .map((f) => read(`data/ideologies/${f}`));
const PDIR = path.join(ROOT, 'data/calibration/personas');
const raw = {};
for (const ide of ideologies) {
  const f = path.join(PDIR, `${ide.id}.json`);
  if (!fs.existsSync(f)) { console.error(`missing persona answers for ${ide.id}`); process.exit(1); }
  raw[ide.id] = scoreMap(questions, JSON.parse(fs.readFileSync(f, 'utf8')).answers);
}

// 2. stretch
const onChart = ideologies.filter((i) => !i.place.ring && !i.place.center);
const q90 = (k) => { const v = onChart.map((i) => Math.abs(raw[i.id][k])).sort((a, b) => a - b); return v[Math.floor(v.length * 0.9)]; };
const scale = Object.fromEntries(['x', 'y', 'p'].map((k) => [k, Math.round((1 / Math.max(q90(k), 0.05)) * 100) / 100]));
const cal = { scale };
const pt = Object.fromEntries(ideologies.map((i) => [i.id, toChart(raw[i.id], cal)]));
// a stance written to cover a region of the chart is anchored there: its adherents answer at the extremes, as every
// persona does, which would pull it to the edge of the region it exists to cover
for (const i of ideologies) if (i.anchor) pt[i.id] = { ...pt[i.id], ...i.anchor };

// 3. assignment
const cells = [];
for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
  if (c >= CENTER.c0 && c <= CENTER.c1 && r >= CENTER.r0 && r <= CENTER.r1) continue;
  cells.push({ c, r, x: colX(c), y: rowY(r) });
}
if (cells.length !== onChart.length) throw new Error(`${onChart.length} ideologies for ${cells.length} cells`);
const CW = 2 / COLS, CH = 2 / ROWS;
const cost = onChart.map((i) => cells.map((cell) => ((pt[i.id].x - cell.x) / CW) ** 2 + ((pt[i.id].y - cell.y) / CH) ** 2));

function hungarian(a) { // square cost matrix → assignment row → column, minimum total cost
  const n = a.length, INF = 1e18, u = new Array(n + 1).fill(0), v = new Array(n + 1).fill(0), p = new Array(n + 1).fill(0), way = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    p[0] = i; let j0 = 0; const minv = new Array(n + 1).fill(INF), used = new Array(n + 1).fill(false);
    do {
      used[j0] = true; const i0 = p[j0]; let delta = INF, j1 = 0;
      for (let j = 1; j <= n; j++) if (!used[j]) {
        const cur = a[i0 - 1][j - 1] - u[i0] - v[j];
        if (cur < minv[j]) { minv[j] = cur; way[j] = j0; }
        if (minv[j] < delta) { delta = minv[j]; j1 = j; }
      }
      for (let j = 0; j <= n; j++) { if (used[j]) { u[p[j]] += delta; v[j] -= delta; } else minv[j] -= delta; }
      j0 = j1;
    } while (p[j0] !== 0);
    do { const j1 = way[j0]; p[j0] = p[j1]; j0 = j1; } while (j0);
  }
  const res = new Array(n); for (let j = 1; j <= n; j++) res[p[j] - 1] = j - 1; return res;
}
const assign = hungarian(cost);

// 4. write
const level = (p) => Math.max(1, Math.min(9, Math.round(5 - 4 * p)));
let moved = 0, total = 0;
const report = [];
onChart.forEach((ide, n) => {
  const cell = cells[assign[n]];
  const d = Math.sqrt(cost[n][assign[n]]);
  total += d;
  const lv = level(pt[ide.id].p);
  if (cell.c !== ide.place.col || cell.r !== ide.place.row) moved++;
  report.push({ id: ide.id, from: `${ide.place.col},${ide.place.row} L${ide.level}`, to: `${cell.c},${cell.r} L${lv}`, d });
  if (!dry) rewrite(ide.id, { col: cell.c, row: cell.r }, lv);
});
for (const ide of ideologies.filter((i) => i.place.ring)) if (!dry) rewrite(ide.id, null, level(pt[ide.id].p), false);
// the centre block is defined by refusing every axis: it stands at the origin whatever its answers say
for (const ide of ideologies.filter((i) => i.place.center)) {
  pt[ide.id] = { ...pt[ide.id], x: 0, y: 0, p: 0 };
  if (!dry) rewrite(ide.id, null, 5);
}
function rewrite(id, place, lv, withPoint = true) {
  const f = path.join(ROOT, 'data/ideologies', `${id}.yaml`);
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/^level: \d+$/m, `level: ${lv}`);
  const r3 = (v) => Math.round(v * 1000) / 1000;
  const p = pt[id];
  const line = `point: { x: ${r3(p.x)}, y: ${r3(p.y)}, p: ${r3(p.p)} }`;
  if (withPoint) s = /^point: .*$/m.test(s) ? s.replace(/^point: .*$/m, line) : s.replace(/^place:/m, `${line}
place:`);
  if (place) s = s.replace(/^place:\n  col: \d+\n  row: \d+$/m, `place:\n  col: ${place.col}\n  row: ${place.row}`);
  fs.writeFileSync(f, s);
}
if (!dry) fs.writeFileSync(path.join(ROOT, 'data/calibration.yaml'),
  `# Written by scripts/calibrate.mjs from data/calibration/personas/. Do not edit by hand.\n# scale: how far each chart axis is stretched before a score is placed (see toChart in src/lib/compass.js).\n${yaml.dump(cal)}`);

report.sort((a, b) => b.d - a.d);
console.log(`scale ${JSON.stringify(scale)} · ${moved}/${onChart.length} moved · mean displacement after assignment ${(total / onChart.length).toFixed(2)} cells`);
console.log('largest displacements (ideology point → its cell):');
report.slice(0, 8).forEach((r) => console.log(`  ${r.id.padEnd(36)} ${r.from} → ${r.to}  ${r.d.toFixed(1)} cells`));
console.log('ring titles (does each one meet its own condition?):');
for (const ide of ideologies.filter((i) => i.place.ring)) {
  const s = toChart(raw[ide.id], cal);
  console.log(`  ${meets(ide.place.when, s) ? 'yes' : 'NO '} ${ide.id.padEnd(30)} ${JSON.stringify(ide.place.when)}  x ${s.x.toFixed(2)} y ${s.y.toFixed(2)} p ${s.p.toFixed(2)} o ${s.o.toFixed(2)} a ${s.a.toFixed(2)}`);
}
