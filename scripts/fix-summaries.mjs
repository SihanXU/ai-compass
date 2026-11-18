// Quote every wiki summary so a colon or a quote mark in it cannot break the front matter. Safe to run again.
import fs from 'node:fs';
import path from 'node:path';
for (const lang of ['en', 'zh']) {
  const dir = path.join('content/wiki', lang);
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const text = fs.readFileSync(p, 'utf8');
    const out = text.replace(/^summary:[ \t]*(.+)$/m, (m, v) => {
      v = v.trim();
      if (/^".*"$/.test(v)) return m;
      if (/^'.*'$/.test(v)) v = v.slice(1, -1).replace(/''/g, "'");
      return `summary: ${JSON.stringify(v)}`;
    });
    if (out !== text) fs.writeFileSync(p, out);
  }
}
