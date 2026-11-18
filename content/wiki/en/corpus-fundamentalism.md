---
summary: "The text of the web already contains essentially all human knowledge, so curating and training on that corpus is the core of AI."
---
## Beliefs

Corpus Fundamentalism holds that the written record is the scripture of intelligence. Everything humans know about physics, law, cooking, mathematics and gossip has been written down somewhere, and most of it is now on the web. The task of AI is therefore to gather that text, clean it, deduplicate it, filter it and feed it to a model. Architecture tweaks are commentary; the corpus is the canon.

It sits on the far left of the chart, one row below the top: about as language-first as a position can be, and strongly Monolith, because the knowledge is meant to live inside the pretrained weights rather than be fetched at runtime. Its paradigm score leans old-guard. The belief that data quality matters more than model cleverness was once a contrarian insight; it is now the standard operating procedure of every pretraining team.

## Arguments

- Gains from better data filtering and deduplication are often comparable to gains from architectural changes, at a fraction of the effort.
- Large open text corpora built from web crawls, books and code made broad pretraining reproducible across the community.
- Text compresses human experience into a dense, symbolic form that is far cheaper to learn from than raw sensory data.

## Critiques

- The web is finite; at current consumption rates the supply of high-quality human text is a real constraint.
- Text records what people chose to write down, which underrepresents tacit, physical and procedural knowledge.
- Grounding advocates argue that a model trained only on descriptions of the world never learns what the words refer to.
