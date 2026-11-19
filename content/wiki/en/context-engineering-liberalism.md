---
summary: "What a model sees matters more than which model it is; curating the context window is the main lever on agent quality."
---
## Beliefs

Context-Engineering Liberalism is what prompt engineering became once prompts stopped being a single clever paragraph. Its adherents treat the context window as a scarce, carefully managed resource: system instructions, retrieved documents, tool outputs, compressed history, scratchpads and examples all compete for space, and the art is deciding what goes in, in what order, and what gets summarized or dropped. Most agent failures, they argue, are not intelligence failures but information failures: the model simply never saw the file, the error message or the constraint it needed.

It sits on the Language side, since its raw material is text assembled for a language model, and low toward the Harness end, since the assembling is done by a system around the model. "Liberalism" because it is pragmatic and model-agnostic: swap in any model you like, the context pipeline is still where the leverage lives. Its paradigm level is steady.

## Arguments

- Studies of long-context use show models attend unevenly across the window, with information in the middle often used worse than at the edges, so placement and pruning genuinely matter.
- Retrieval, compaction and tool-output trimming are cheap compared to switching to a larger model, and often fix the same failure.
- Coding agents illustrate the point daily: the same model succeeds or flails depending on whether the right files and test output were in view.

## Critiques

- Scale advocates expect better models to need less hand-curation, making today's context tricks a temporary patch, as the bitter lesson predicts.
- "Context engineering" can become an unfalsifiable catch-all: any success is credited to good context, any failure to bad context.
- Heavy pipelines of summarization and retrieval add their own lossy steps and are hard to debug when the crucial detail gets compressed away.
