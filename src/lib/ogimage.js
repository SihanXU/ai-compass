// Draws link-preview images (1200 × 630 PNG) at build time with satori and resvg.
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ideologies, colourOf, gridOf, CENTER, COLS, ROWS } from './data.js';

const FONT_DIR = path.join(process.cwd(), 'assets/fonts');
const fonts = [
  { name: 'Noto', data: fs.readFileSync(path.join(FONT_DIR, 'og-regular.otf')), weight: 400, style: 'normal' },
  { name: 'Noto', data: fs.readFileSync(path.join(FONT_DIR, 'og-bold.otf')), weight: 700, style: 'normal' },
];

/** a tiny element builder: h('div', { style }, ...children) */
export const h = (type, props = {}, ...children) => ({
  type, props: { ...props, children: children.flat().filter((c) => c !== null && c !== false && c !== undefined) },
});

export function ball(bg, size) {
  const eye = (left) => h('div', {
    style: {
      position: 'absolute', top: size * 0.3, left, width: size * 0.17, height: size * 0.2,
      background: '#fff', border: `${Math.max(3, size * 0.025)}px solid #111`, borderRadius: '50%',
    },
  });
  return h('div', {
    style: {
      position: 'relative', display: 'flex', width: size, height: size, borderRadius: '50%', background: bg,
      border: `${Math.max(4, size * 0.035)}px solid #111`, boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
    },
  }, eye(size * 0.27), eye(size * 0.52));
}

/** the whole chart in miniature, the given ideology outlined (or none) */
export function miniChart(cell, highlight) {
  const rows = [];
  for (let r = -1; r <= ROWS; r++) {
    const cells = [];
    for (let c = -1; c <= COLS; c++) {
      let ide = ideologies.find((i) => { const g = gridOf(i.place); return g.kind !== 'center' && g.col === c && g.row === r; });
      if (!ide && c >= CENTER.c0 && c <= CENTER.c1 && r >= CENTER.r0 && r <= CENTER.r1) ide = ideologies.find((i) => i.place.center);
      const me = ide && highlight && ide.id === highlight;
      cells.push(h('div', {
        style: {
          width: cell, height: cell, flexShrink: 0, marginRight: 1, background: ide ? colourOf(ide).bg : 'transparent',
          ...(me ? { border: '3px solid #111', boxShadow: '0 0 0 2px #fff' } : {}),
        },
      }));
    }
    rows.push(h('div', { style: { display: 'flex', flexShrink: 0, width: (COLS + 2) * (cell + 1), marginBottom: 1 } }, cells));
  }
  return h('div', { style: { display: 'flex', flexDirection: 'column', flexShrink: 0, width: (COLS + 2) * (cell + 1) } }, rows);
}

/** a pale tint of a chart colour, for the panel behind its ball */
export const tint = (bg) => bg.replace(/hsl\((\d+) (\d+)% \d+%\)/, (m, hue, sat) => `hsl(${hue} ${Math.min(60, sat)}% 93%)`).replace('#cfd2d6', '#eceef1');

export async function png(element) {
  const svg = await satori(element, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
