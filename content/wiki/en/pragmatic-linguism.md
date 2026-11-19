---
summary: "Language is the core of useful intelligence, today's recipe is good enough, and a strong language model plus retrieval and a handful of tools beats elaborate agent frameworks."
---
## Beliefs

Pragmatic Linguism is the working default of people who have to put language models in front of users. It believes language is the right substrate: text carries most of the knowledge and instructions that matter, and a well-trained language model already reasons, writes and follows directions well enough to be useful. It sees no need to wait for a new paradigm or a world model. The current recipe of pretraining, instruction tuning and preference training works, and the next model release will make it work better.

Where it parts from the monolith purists is a modest concession to reality. A model on its own hallucinates facts and cannot see private data, so it gets retrieval over the right documents and a few well-defined tools such as search, a calculator or a database query. Where it parts from harness enthusiasts is restraint: it distrusts deep agent loops, multi-agent hierarchies and sprawling frameworks, preferring a short, predictable path from request to answer that can be tested and shipped this quarter.

## Arguments

- Retrieval grounds answers in sources and lets knowledge be updated without retraining.
- Models can learn when to call simple tools, covering arithmetic and lookups that weights handle poorly.
- Simple pipelines are cheaper, faster and easier to debug, and they inherit most gains from each model upgrade for free.

## Critiques

- Harness advocates argue that the hardest, most valuable tasks need long loops, memory and verification, not one call and a search.
- World-first critics say a text-only core will keep failing at physical and spatial reasoning.
- "Ship it" thinking can lock teams into whatever works today and leave them unready for the next shift.
