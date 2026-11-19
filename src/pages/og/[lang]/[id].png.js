// Link-preview images: one per ideology per language (og/<lang>/<id>.png) and one for the site (og/<lang>/site.png).
import { ideologies, colourOf, levelOf } from '../../../lib/data.js';
import { t, LANGS } from '../../../lib/i18n.js';
import { h, ball, miniChart, png, tint } from '../../../lib/ogimage.js';

export function getStaticPaths() {
  return LANGS.flatMap((lang) => [...ideologies.map((i) => i.id), 'site'].map((id) => ({ params: { lang, id } })));
}

const SITE = 'sihanxu.me/ai-compass';

export async function GET({ params }) {
  const { lang, id } = params;
  const font = { fontFamily: 'Noto', color: '#111' };
  if (id === 'site') {
    return new Response(await png(h('div', {
      style: { ...font, width: 1200, height: 630, display: 'flex', position: 'relative', background: '#f8f9fa', padding: 64, alignItems: 'center' },
    },
      h('div', { style: { display: 'flex', flexDirection: 'column', width: 560 } },
        h('div', { style: { fontSize: 26, color: '#999', letterSpacing: 3 } }, 'SIHAN XU'),
        h('div', { style: { fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginTop: 18 } }, t(lang, 'heroTitleA')),
        h('div', { style: { fontSize: 76, fontWeight: 700, lineHeight: 1.05, color: '#2563eb' } }, t(lang, 'heroTitleB')),
        h('div', { style: { fontSize: 28, color: '#555', marginTop: 28, lineHeight: 1.45 } }, t(lang, 'ogSiteLine')),
        h('div', { style: { fontSize: 24, color: '#2563eb', marginTop: 36 } }, SITE),
      ),
      h('div', { style: { display: 'flex', position: 'absolute', left: 1200 - 64 - 15 * 26, top: (630 - 14 * 26) / 2 } }, miniChart(25, null)),
    )), { headers: { 'Content-Type': 'image/png' } });
  }

  const ide = ideologies.find((i) => i.id === id);
  const col = colourOf(ide);
  const lv = levelOf(ide.level);
  const name = ide.name[lang];
  return new Response(await png(h('div', {
    style: { ...font, width: 1200, height: 630, display: 'flex', background: '#f8f9fa' },
  },
    h('div', { style: { width: 420, height: 630, display: 'flex', alignItems: 'center', justifyContent: 'center', background: tint(col.bg) } },
      ball(col.bg, 250)),
    h('div', { style: { display: 'flex', flexDirection: 'column', flex: 1, padding: '58px 56px', justifyContent: 'space-between' } },
      h('div', { style: { display: 'flex', flexDirection: 'column' } },
        h('div', { style: { fontSize: 24, color: '#999', letterSpacing: 2 } }, t(lang, 'ogIGot')),
        h('div', { style: { fontSize: name.length > 18 ? 54 : 66, fontWeight: 700, lineHeight: 1.1, marginTop: 14 } }, name),
        h('div', { style: { fontSize: 30, color: '#333', marginTop: 22, lineHeight: 1.4 } }, lang === 'zh' ? `“${ide.motto[lang]}”` : `"${ide.motto[lang]}"`),
        h('div', { style: { fontSize: 22, color: '#777', marginTop: 18 } }, `${t(lang, 'paradigm')} · ${lv[lang]}`),
      ),
      h('div', { style: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' } },
        h('div', { style: { display: 'flex', flexDirection: 'column' } },
          h('div', { style: { fontSize: 26, fontWeight: 700 } }, t(lang, 'site')),
          h('div', { style: { fontSize: 22, color: '#2563eb', marginTop: 6 } }, SITE),
        ),
        h('div', { style: { display: 'flex', flexShrink: 0, width: 15 * 14 } }, miniChart(13, ide.id)),
      ),
    ),
  )), { headers: { 'Content-Type': 'image/png' } });
}
