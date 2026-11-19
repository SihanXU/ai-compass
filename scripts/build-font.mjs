// Builds the small fonts used to draw link-preview images (src/pages/og/): Noto Sans SC, Bold and Regular
// (SIL Open Font License), cut down to the characters the site's names, mottos and labels use.
// Run after names or mottos change: node scripts/build-font.mjs
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import subsetFont from 'subset-font';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const SRC = 'https://github.com/notofonts/noto-cjk/raw/main/Sans/SubsetOTF/SC/NotoSansSC-';
const read = (p) => yaml.load(fs.readFileSync(path.join(ROOT, p), 'utf8'));

let text = '';
for (const f of fs.readdirSync(path.join(ROOT, 'data/ideologies'))) {
  const i = read(`data/ideologies/${f}`);
  text += i.name.en + i.name.zh + i.motto.en + i.motto.zh;
}
for (const l of read('data/levels.yaml').levels) text += l.en + l.zh;
for (const c of read('data/camps.yaml').camps) text += c.name.en + c.name.zh;
for (const a of read('data/axes.yaml').axes) text += a.neg.en + a.neg.zh + a.pos.en + a.pos.zh + a.title.en + a.title.zh;
text += fs.readFileSync(path.join(ROOT, 'src/lib/i18n.js'), 'utf8');
for (let c = 32; c < 127; c++) text += String.fromCharCode(c);
text += '“”‘’—–·…：，。！？（）《》「」、';
const chars = [...new Set(text)].join('');

for (const weight of ['Bold', 'Regular']) {
  const res = await fetch(`${SRC}${weight}.otf`);
  if (!res.ok) throw new Error(`download ${weight}: ${res.status}`);
  const full = Buffer.from(await res.arrayBuffer());
  const out = await subsetFont(full, chars, { targetFormat: 'sfnt' });
  const file = path.join(ROOT, 'assets/fonts', `og-${weight.toLowerCase()}.otf`);
  fs.writeFileSync(file, out);
  console.log(`${path.relative(ROOT, file)}: ${chars.length} characters, ${(out.length / 1024).toFixed(0)} KB`);
}
