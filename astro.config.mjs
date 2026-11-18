import { defineConfig } from 'astro/config';

// Served as a project page of sihanxu.github.io, i.e. at https://sihanxu.me/ai-compass/.
// To serve it elsewhere, set SITE and BASE (BASE=/ for a domain of its own).
export default defineConfig({
  site: process.env.SITE || 'https://sihanxu.me',
  base: process.env.BASE || '/ai-compass',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
