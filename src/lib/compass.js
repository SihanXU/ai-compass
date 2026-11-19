// The compass's maths, shared by the build and the browser. Pure functions, no data loading.
//
// Coordinates: every score is in [-1, 1].
//   x: Language (-1) … World (+1)          — chart columns, left to right
//   y: Harness (-1) … Monolith (+1)        — chart rows, bottom to top
//   p: Mainstream (-1) … Paradigm shift (+1) — cell shade (paradigm level 9 … 1)
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

/** The point an ideology stands for: its calibrated point when it has one, else the centre of its cell. */
export function pointOf(ide) {
  if (ide.point) return { x: ide.point.x, y: ide.point.y, p: ide.point.p };
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
    // "unsure" (0) is not counted: it neither moves the score nor dilutes it
    if (!answers[i]) return;
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
 * Distance from a score to an inner cell or the centre block (at its centre point), in cell units.
 * pw weighs the paradigm axis: one level of mismatch costs as much as sqrt(pw) cells.
 */
export function distance(ide, s, pw) {
  // calibrated ideologies are matched at the point their own answers put them, not at the cell they are drawn in
  if (ide.point) {
    const u = (s.x - ide.point.x) / CW, v = (s.y - ide.point.y) / CH, w = (s.p - ide.point.p) / 0.25;
    return u * u + v * v + pw * w * w;
  }
  const g = gridOf(ide.place);
  let u, v;
  if (g.kind === 'center') {
    // drawn three cells wide and two tall, but matched at its centre like any single cell
    u = s.x / CW;
    v = s.y / CH;
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
    .map((ide) => ({ ide, d: distance(ide, s, quick ? 0 : 1) }))
    .sort((a, b) => a.d - b.d);
}

/**
 * The headline result: the nearest core stance. Topic ideologies (one subject: hands, bytes, a protocol…) sit on the
 * chart and in the wiki, and appear among the neighbours, but a position on three axes cannot tell whether someone
 * cares about their subject, so they never stand for a whole result.
 */
export const headline = (ideologies, s, quick = false) => rank(ideologies.filter((i) => i.kind !== 'topic'), s, quick);

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
export function encodeResult(version, mode, s, extra = {}) {
  const r = (v) => Math.round(v * 100) / 100;
  let out = `v=${version}&m=${mode}&s=${AXIS_KEYS.map((k) => r(s[k])).join(',')}`;
  if (extra.subs) out += `&u=${SUB_KEYS.map((k) => (k in extra.subs ? r(extra.subs[k]) : '')).join(',')}`;
  if (extra.c != null) out += `&c=${r(extra.c)}`;
  return out;
}
export function decodeResult(search) {
  const q = new URLSearchParams(search);
  const m = q.get('m');
  const v = (q.get('s') || '').split(',').map(Number);
  if (!(m === 'quick' || m === 'full' || m === 'pro') || v.length !== 5 || v.some((n) => !Number.isFinite(n))) return null;
  const c = (n) => Math.max(-1, Math.min(1, n));
  const s = {};
  AXIS_KEYS.forEach((k, i) => { s[k] = c(v[i]); });
  const out = { version: Number(q.get('v')) || 1, mode: m, s };
  const u = q.get('u');
  if (u) {
    const parts = u.split(',');
    out.subs = {};
    SUB_KEYS.forEach((k, i) => { const n = parts[i] === '' || parts[i] == null ? NaN : Number(parts[i]); if (Number.isFinite(n)) out.subs[k] = c(n); });
  }
  const cc = Number(q.get('c'));
  if (q.has('c') && Number.isFinite(cc)) out.c = Math.max(0, Math.min(1, cc));
  return out;
}

// ---------------------------------------------------------------- the pro test
/** Sub-dimensions in a fixed order (they travel in result links in this order). Must match data/subaxes.yaml. */
export const SUB_KEYS = [
  'x.source', 'x.medium', 'x.body',
  'y.arch', 'y.memory', 'y.control',
  'p.arch', 'p.objective', 'p.continual',
  'o.weights', 'o.science',
  'a.pace', 'a.oversight',
];

/** answers: { questionId: -2..2 }. Returns a score in [-1, 1] for every sub-dimension that has at least one answer. */
export function scoreSubs(questions, answers) {
  const sum = {}, max = {};
  for (const [id, v] of Object.entries(answers)) {
    const q = questions[id];
    if (!q || !v || !q.sub) continue;
    for (const [axis, w] of Object.entries(q.effects)) {
      const k = `${axis}.${q.sub[axis]}`;
      sum[k] = (sum[k] || 0) + v * w;
      max[k] = (max[k] || 0) + 2 * Math.abs(w);
    }
  }
  const out = {};
  for (const k of SUB_KEYS) if (max[k]) out[k] = sum[k] / max[k];
  return out;
}

/** The five axis scores from an answer map (any statements, any order). */
export function scoreMap(questions, answers) {
  const ids = Object.keys(answers).filter((id) => questions[id] && answers[id] != null);
  return score(questions, ids, ids.map((id) => answers[id]));
}

/**
 * How consistently the answers point the same way on the three chart axes, 0 … 1.
 * For each axis: |net pull| / total pull. Someone who agrees with both ends of an axis scores low.
 */
export function consistency(questions, answers) {
  let net = 0, total = 0;
  for (const axis of ['x', 'y', 'p']) {
    let s = 0, t = 0;
    for (const [id, v] of Object.entries(answers)) {
      const w = questions[id]?.effects?.[axis];
      if (!w || !v) continue;
      s += v * w; t += Math.abs(v * w);
    }
    net += Math.abs(s); total += t;
  }
  return total ? net / total : 1;
}

/**
 * The next follow-up: among the unasked statements in the pool, the one whose direction best separates the closest
 * cells to the current score. Returns { id, pair: [ideA, ideB] } (the pair it separates most), or null.
 */
export function pickFollowUp(questions, pool, asked, ideologies, s) {
  const top = headline(ideologies, s).slice(0, 4);
  const pts = top.map((e) => ({ ide: e.ide, d: e.d, pt: pointOf(e.ide) }));
  let best = null;
  for (const id of pool) {
    if (asked.has(id) || !questions[id]) continue;
    const w = questions[id].effects;
    let total = 0, bestPair = null, bestPairV = -1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const diff = ['x', 'y', 'p'].reduce((acc, k) => acc + (w[k] || 0) * (pts[i].pt[k] - pts[j].pt[k]), 0);
        const v = Math.abs(diff) / (1 + pts[i].d + pts[j].d);
        total += v;
        if (v > bestPairV) { bestPairV = v; bestPair = [pts[i].ide, pts[j].ide]; }
      }
    }
    if (!best || total > best.total) best = { id, total, pair: bestPair };
  }
  return best && best.total > 0 ? { id: best.id, pair: best.pair } : null;
}

// ---------------------------------------------------------------- calibration
/**
 * Raw scores are compressed toward 0 (people rarely answer every statement at the extreme). data/calibration.yaml
 * holds one stretch factor per chart axis, fitted so that the ideologies' own blind answers fill the chart;
 * every score is stretched the same way before it is placed, so a person and an ideology with the same answers
 * land on the same cell. o and a are not stretched.
 */
export function toChart(s, cal) {
  if (!cal || !cal.scale) return s;
  const out = { ...s };
  for (const k of ['x', 'y', 'p']) if (cal.scale[k]) out[k] = Math.max(-1, Math.min(1, s[k] * cal.scale[k]));
  return out;
}
