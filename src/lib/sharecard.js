// The share card, drawn in the browser on a canvas: portrait 1080 × 1350 or landscape 1200 × 630.
// Ball, name, motto, the axis bars, the chart in miniature with your cell, a QR code to the result, the address.
import qrcode from 'qrcode-generator';
import { ideologyColour, gridOf, CENTER, COLS, ROWS } from './compass.js';

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif';
const font = (w, px) => `${w} ${px}px ${FONT}`;
const tint = (bg) => bg.replace(/hsl\((\d+) (\d+)% \d+%\)/, (m, h, s) => `hsl(${h} ${Math.min(60, s)}% 93%)`).replace('#cfd2d6', '#eceef1');

function wrap(g, text, x, y, w, lh, maxLines, cjk) {
  const words = cjk ? [...text] : text.split(' ');
  let line = '', lines = 0;
  for (let i = 0; i < words.length; i++) {
    const test = line ? (cjk ? line + words[i] : `${line} ${words[i]}`) : words[i];
    if (g.measureText(test).width > w && line) {
      if (lines === maxLines - 1) { g.fillText(`${line.replace(/[\s,，、]+$/, '')}…`, x, y); return y + lh; }
      g.fillText(line, x, y); y += lh; lines++; line = words[i];
    } else line = test;
  }
  g.fillText(line, x, y);
  return y + lh;
}

function ball(g, cx, cy, r, bg) {
  g.save();
  g.shadowColor = 'rgba(0,0,0,0.18)'; g.shadowBlur = r * 0.18; g.shadowOffsetY = r * 0.08;
  g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fillStyle = bg; g.fill();
  g.restore();
  const grad = g.createRadialGradient(cx - r * 0.3, cy - r * 0.4, r * 0.1, cx, cy, r);
  grad.addColorStop(0, 'rgba(255,255,255,0.35)'); grad.addColorStop(0.6, 'rgba(255,255,255,0)'); grad.addColorStop(1, 'rgba(0,0,0,0.18)');
  g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fillStyle = grad; g.fill();
  g.lineWidth = r * 0.08; g.strokeStyle = '#111'; g.stroke();
  for (const dx of [-0.32, 0.32]) {
    g.beginPath(); g.ellipse(cx + dx * r, cy - r * 0.14, r * 0.19, r * 0.23, 0, 0, Math.PI * 2);
    g.fillStyle = '#fff'; g.fill(); g.lineWidth = r * 0.055; g.stroke();
  }
}

function chart(g, x, y, cell, ideologies, highlight) {
  for (const ide of ideologies) {
    const gr = gridOf(ide.place);
    g.fillStyle = ideologyColour(ide).bg;
    if (gr.kind === 'center') g.fillRect(x + (CENTER.c0 + 1) * cell, y + (CENTER.r0 + 1) * cell, 3 * cell - 1, 2 * cell - 1);
    else g.fillRect(x + (gr.col + 1) * cell, y + (gr.row + 1) * cell, cell - 1, cell - 1);
  }
  g.fillStyle = 'rgba(0,0,0,0.4)';
  g.fillRect(x + cell, y + cell + (ROWS * cell) / 2 - 1, COLS * cell, 2);
  g.fillRect(x + cell + (COLS * cell) / 2 - 1, y + cell, 2, ROWS * cell);
  const me = ideologies.find((i) => i.id === highlight);
  if (me) {
    const gr = gridOf(me.place);
    const [cx, cy] = gr.kind === 'center' ? [x + (CENTER.c0 + 2.5) * cell, y + (CENTER.r0 + 2) * cell] : [x + (gr.col + 1.5) * cell, y + (gr.row + 1.5) * cell];
    for (const [r, c] of [[cell * 0.75, '#111'], [cell * 0.5, '#fff'], [cell * 0.32, '#2563eb']]) { g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fillStyle = c; g.fill(); }
  }
  return { w: (COLS + 2) * cell, h: (ROWS + 2) * cell };
}

function qr(g, text, x, y, size) {
  const q = qrcode(0, 'M'); q.addData(text); q.make();
  const n = q.getModuleCount(), quiet = 2, m = size / (n + quiet * 2);
  g.fillStyle = '#fff'; g.fillRect(x, y, size, size);
  g.fillStyle = '#111';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) g.fillRect(Math.floor(x + (c + quiet) * m), Math.floor(y + (r + quiet) * m), Math.ceil(m), Math.ceil(m));
}

function bars(g, list, x, y, w, rowH, labelPx) {
  for (const b of list) {
    const right = (b.value + 1) / 2;
    g.fillStyle = '#333'; g.font = font(600, labelPx);
    g.textAlign = 'left'; g.fillText(b.neg, x, y + labelPx);
    g.textAlign = 'right'; g.fillText(b.pos, x + w, y + labelPx);
    g.textAlign = 'center'; g.fillStyle = '#666'; g.font = font(500, labelPx * 0.92); g.fillText(b.label, x + w / 2, y + labelPx);
    g.textAlign = 'left';
    const by = y + labelPx * 1.45, bh = rowH * 0.32, r = bh / 2;
    g.save(); g.beginPath(); g.roundRect(x, by, w, bh, r); g.clip();
    g.fillStyle = b.colors[0]; g.fillRect(x, by, w * (1 - right), bh);
    g.fillStyle = b.colors[1]; g.fillRect(x + w * (1 - right), by, w * right, bh);
    g.restore();
    y += rowH;
  }
  return y;
}

/**
 * opts: { format: 'portrait' | 'landscape', lang, label, name, motto, colour, bars: [{neg, pos, label, value, colors}],
 *         note, ideologies, highlight, url, site }
 */
export function drawShareCard(opts) {
  const portrait = opts.format === 'portrait';
  const W = portrait ? 1080 : 1200, H = portrait ? 1350 : 630;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const cjk = opts.lang === 'zh';
  g.fillStyle = '#f8f9fa'; g.fillRect(0, 0, W, H);

  if (portrait) {
    g.fillStyle = tint(opts.colour); g.fillRect(0, 0, W, 400);
    g.fillStyle = '#666'; g.font = font(600, 26); g.fillText(opts.label.toUpperCase(), 72, 84);
    ball(g, W / 2, 232, 128, opts.colour);
    g.fillStyle = '#111'; g.font = font(800, opts.name.length > (cjk ? 9 : 22) ? 58 : 72);
    let y = wrap(g, opts.name, 72, 492, W - 144, 76, 2, cjk);
    g.fillStyle = '#333'; g.font = font(400, 34);
    y = wrap(g, cjk ? `“${opts.motto}”` : `"${opts.motto}"`, 72, y - 6, W - 144, 46, 2, cjk);
    y = bars(g, opts.bars, 72, y + 8, W - 144, opts.bars.length > 2 ? 72 : 90, 24);
    if (opts.note) { g.fillStyle = '#666'; g.font = font(500, 22); g.fillText(opts.note, 72, y + 2); }
    const cell = 17, top = H - 72 - (ROWS + 2) * cell;
    chart(g, 72, top, cell, opts.ideologies, opts.highlight);
    qr(g, opts.url, W - 72 - 238, top, 238);
    // between the chart and the QR code: what this is and where
    const mid = (72 + (COLS + 2) * cell + (W - 72 - 238)) / 2;
    g.textAlign = 'center';
    g.fillStyle = '#111'; g.font = font(700, 28); g.fillText(opts.site, mid, H - 72 - 44);
    g.fillStyle = '#2563eb'; g.font = font(500, 22); g.fillText(opts.siteUrl, mid, H - 72 - 8);
    g.fillStyle = '#999'; g.font = font(500, 20); g.fillText(opts.scan, mid, top + 30);
    g.textAlign = 'left';
  } else {
    g.fillStyle = tint(opts.colour); g.fillRect(0, 0, 360, H);
    ball(g, 180, 300, 118, opts.colour);
    const x = 404, w = W - x - 56 - 190;
    g.fillStyle = '#888'; g.font = font(600, 20); g.fillText(opts.label.toUpperCase(), x, 70);
    g.fillStyle = '#111'; g.font = font(800, opts.name.length > (cjk ? 9 : 22) ? 44 : 54);
    let y = wrap(g, opts.name, x, 128, w, 58, 2, cjk);
    g.fillStyle = '#333'; g.font = font(400, 24);
    y = wrap(g, cjk ? `“${opts.motto}”` : `"${opts.motto}"`, x, y - 4, w, 34, 2, cjk);
    bars(g, opts.bars, x, y + 4, w, opts.bars.length > 2 ? 50 : 66, 16);
    qr(g, opts.url, W - 56 - 170, 56, 170);
    chart(g, W - 56 - 170 + (170 - 15 * 11) / 2, 270, 11, opts.ideologies, opts.highlight);
    g.fillStyle = '#111'; g.font = font(700, 22); g.textAlign = 'right';
    g.fillText(opts.site, W - 56, H - 70);
    g.fillStyle = '#2563eb'; g.font = font(500, 18); g.fillText(opts.siteUrl, W - 56, H - 44);
    g.textAlign = 'left';
  }
  return cv;
}
