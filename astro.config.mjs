import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import * as yaml from 'js-yaml';

// Served as a project page of sihanxu.github.io, i.e. at https://sihanxu.me/ai-compass/.
// To serve it elsewhere, set SITE and BASE (BASE=/ for a domain of its own).
const base = process.env.BASE || '/ai-compass';

// old wiki addresses of merged ideologies → the ideology they were merged into (data/merged.yaml)
const merged = yaml.load(fs.readFileSync(new URL('./data/merged.yaml', import.meta.url), 'utf8')) || {};
const redirects = Object.fromEntries(Object.entries(merged).flatMap(([from, to]) =>
  ['en', 'zh'].map((lang) => [`/${lang}/wiki/${from}`, `${base.replace(/\/$/, '')}/${lang}/wiki/${to}/`])));

export default defineConfig({
  site: process.env.SITE || 'https://sihanxu.me',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects,
});
