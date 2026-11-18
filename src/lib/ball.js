// The ideology ball as an SVG string, for pages that draw in the browser (the result page). Mirrors Ball.astro.
let n = 0;
export function ballSvg(bg, size = 64, ring = false) {
  const id = `rb${++n}`;
  return `<svg class="ball" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
<defs><clipPath id="${id}"><circle cx="50" cy="52" r="44"/></clipPath>
<radialGradient id="${id}g" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity="0.35"/><stop offset="0.6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.18"/></radialGradient></defs>
${ring ? '<circle cx="50" cy="52" r="48" fill="none" stroke="#e08a1e" stroke-width="3" stroke-dasharray="6 5"/>' : ''}
<circle cx="50" cy="52" r="44" fill="${bg}"/>
<g clip-path="url(#${id})"><rect width="100" height="100" fill="url(#${id}g)"/></g>
<circle cx="50" cy="52" r="44" fill="none" stroke="#111" stroke-width="3.5"/>
<ellipse cx="36" cy="46" rx="8.5" ry="10" fill="#fff" stroke="#111" stroke-width="2.5"/>
<ellipse cx="64" cy="46" rx="8.5" ry="10" fill="#fff" stroke="#111" stroke-width="2.5"/>
</svg>`;
}
