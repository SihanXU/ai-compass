import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The prose of each wiki entry: content/wiki/<lang>/<id>.md. Its structured data lives in data/ideologies/<id>.yaml.
const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/wiki' }),
  schema: z.object({ summary: z.string().min(1) }),
});

export const collections = { wiki };
