// The compass's maths, shared by the build, the browser and the eval script. Pure functions, no data loading.
//
// Coordinates: every score is in [-1, 1].
//   x: Language (-1) … World (+1)          — chart columns, left to right
//   y: Harness (-1) … Monolith (+1)        — chart rows, bottom to top
//   p: Old guard (-1) … Revolution (+1)    — cell shade (paradigm level 9 … 1)
//   o: Frontier (-1) … Open (+1)           — ring titles only
//   a: Caution (-1) … Acceleration (+1)    — ring titles only

export const COLS = 13;
export const ROWS = 12;
export const CENTER = { c0: 5, c1: 7, r0: 5, r1: 6 };
export const AXIS_KEYS = ['x', 'y', 'p', 'o', 'a'];

const CW = 2 / COLS;
const CH = 2 / ROWS;
export const colX = (c) => -1 + (c + 0.5) * CW;
export const rowY = (r) => 1 - (r + 0.5) * CH;
/** paradigm level (1 … 9) → p score (+1 … -1) */
export const levelP = (lv) => (5 - lv) / 4;

// ---------------------------------------------------------------- colour
// Hue by where a cell sits (six families: left / middle / right × top / bottom), shade by paradigm level.
const SHADE = [null, [95, 52], [88, 60], [78, 69], [64, 78], [40, 87], [36, 74], [36, 60], [40, 43], [44, 27]];
export const HUES = { lt: 0, mt: 280, rt: 214, lb: 132, mb: 176, rb: 44 };
export const FAMILIES = ['lt', 'mt', 'rt', 'lb', 'mb', 'rb'];

export function family(c, r) {
  const h = c < 6 ? 'l' : c > 6 ? 'r' : 'm';
  return h + (r < 6 ? 't' : 'b');
}
export function colour(fam, level) {
  const [s, l] = SHADE[level];
  const sat = fam === 'rb' ? Math.min(100, s + 6) : s;
  return { bg: `hsl(${HUES[fam]} ${sat}% ${l}%)`, dark: l < 50 };
}

/** Where a place sits on the grid: inner cells, the centre block, and the ring around the chart (one cell outside). */
export function gridOf(place) {
  if (place.center) return { kind: 'center', col: CENTER.c0, row: CENTER.r0, c: 6, r: 5.5 };
  if (place.ring) {
    const at = place.at ?? 0;
    const pos = {
      tl: [-1, -1], tr: [COLS, -1], bl: [-1, ROWS], br: [COLS, ROWS],
      top: [at, -1], bottom: [at, ROWS], left: [-1, at], right: [COLS, at],
    }[place.ring];
    return { kind: 'ring', col: pos[0], row: pos[1], c: pos[0], r: pos[1] };
  }
  return { kind: 'cell', col: place.col, row: place.row, c: place.col, r: place.row };
}

export function ideologyColour(ide) {
  const g = gridOf(ide.place);
  if (g.kind === 'center') return { bg: '#cfd2d6', dark: false };
  return colour(family(g.c, g.r < 0 ? 0 : g.r >= ROWS ? ROWS - 1 : g.r), ide.level);
}

/** The point on the chart an ideology stands for. */
export function pointOf(ide) {
  const g = gridOf(ide.place);
  if (g.kind === 'center') return { x: 0, y: 0, p: levelP(ide.level) };
  return { x: Math.max(-1, Math.min(1, colX(g.c))), y: Math.max(-1, Math.min(1, rowY(g.r))), p: levelP(ide.level) };
}

// ---------------------------------------------------------------- scoring
/**
 * questions: { id: { effects: { axis: weight } } }, ids: the test's question ids in order,
 * answers: values in {-2, -1, 0, 1, 2} (strongly disagree … strongly agree), aligned with ids.
 */
export function score(questions, ids, answers) {
  const sum = { x: 0, y: 0, p: 0, o: 0, a: 0 };
  const max = { x: 0, y: 0, p: 0, o: 0, a: 0 };
  ids.forEach((id, i) => {
    const q = questions[id];
    for (const [axis, w] of Object.entries(q.effects)) {
      sum[axis] += (answers[i] ?? 0) * w;
      max[axis] += 2 * Math.abs(w);
    }
  });
  const s = {};
  for (const k of AXIS_KEYS) s[k] = max[k] ? sum[k] / max[k] : 0;
  return s;
}

/**
 * Distance from a score to an inner cell or the centre block, in cell units.
 * pw weighs the paradigm axis: one level of mismatch costs as much as sqrt(pw) cells.
 */
export function distance(ide, s, pw) {
  const g = gridOf(ide.place);
  let u, v;
  if (g.kind === 'center') {
    u = Math.max(0, Math.abs(s.x / CW) - 1);
    v = Math.max(0, Math.abs(s.y / CH) - 0.5);
  } else {
    u = (s.x - colX(g.c)) / CW;
    v = (s.y - rowY(g.r)) / CH;
  }
  const w = (s.p - levelP(ide.level)) / 0.25;
  return u * u + v * v + pw * w * w;
}

/** All on-chart ideologies (not the ring), nearest first. The quick test ignores the paradigm axis. */
export function rank(ideologies, s, quick = false) {
  return ideologies
    .filter((i) => !i.place.ring)
    .map((ide) => ({ ide, d: distance(ide, s, quick ? 0 : 0.5) }))
    .sort((a, b) => a.d - b.d);
}

/** A ring condition like { a: '>0.6', x: '<-0.7' }: every clause must hold. */
export function meets(when, s) {
  return Object.entries(when).every(([axis, cond]) => {
    const m = /^([<>])(-?\d*\.?\d+)$/.exec(String(cond).trim());
    if (!m) return false;
    const v = Number(m[2]);
    return m[1] === '>' ? s[axis] > v : s[axis] < v;
  });
}
export const earned = (ideologies, s) => ideologies.filter((i) => i.place.ring && meets(i.place.when, s));

/** The quick test's camp: thirds of x (Language … World) and y (Monolith … Harness). */
export function campOf(s) {
  return { col: s.x < -1 / 3 ? 0 : s.x > 1 / 3 ? 2 : 1, row: s.y > 1 / 3 ? 0 : s.y < -1 / 3 ? 2 : 1 };
}

// ---------------------------------------------------------------- result links
export function encodeResult(version, mode, s) {
  const r = (v) => Math.round(v * 100) / 100;
  return `v=${version}&m=${mode}&s=${AXIS_KEYS.map((k) => r(s[k])).join(',')}`;
}
export function decodeResult(search) {
  const q = new URLSearchParams(search);
  const m = q.get('m');
  const v = (q.get('s') || '').split(',').map(Number);
  if (!(m === 'quick' || m === 'full') || v.length !== 5 || v.some((n) => !Number.isFinite(n))) return null;
  const c = (n) => Math.max(-1, Math.min(1, n));
  const s = {};
  AXIS_KEYS.forEach((k, i) => { s[k] = c(v[i]); });
  return { version: Number(q.get('v')) || 1, mode: m, s };
}
