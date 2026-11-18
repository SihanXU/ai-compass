---
summary: "Many model failures trace back to tokenization, so fix the tokenizer carefully rather than scale past it or abolish it."
---
## Beliefs

Tokenizer Reformism has one recurring diagnosis: it is always the tokenizer. Models that cannot count the letters in a word, stumble over arithmetic, waste context on non-Latin scripts or produce baffling glitch tokens are, in this view, mostly victims of a preprocessing step frozen before training began. The cure is not revolution but reform: better merges, digit splitting, fairer multilingual vocabularies, careful handling of whitespace and code, and auditing the vocabulary for under-trained tokens.

It sits on the Language side (col 2), in the middle of the vertical axis, because it treats the tokenizer as a component worth engineering on its own terms rather than an implementation detail of a monolith. Its shade marks a fairly forward-looking position: it wants change, but incremental change. Reformists keep subword units because they are efficient; they simply refuse to treat a vocabulary built by a greedy compression heuristic as sacred.

## Arguments

- Character-level and spelling tasks fail in ways that line up closely with how words are segmented, which points directly at the tokenizer rather than at reasoning.
- Splitting numbers into individual digits is a cheap, well-known change that tends to help arithmetic, showing that small tokenizer decisions have outsized downstream effects.
- Vocabularies trained mostly on English make other scripts cost several times more tokens, which means higher price, shorter effective context and worse quality for those languages.

## Critiques

- Byte-level radicals say reform only patches a broken institution; any fixed vocabulary will leave new artefacts behind.
- Scale advocates note that larger models paper over many tokenizer quirks, so effort may be better spent elsewhere.
- Changing a tokenizer usually means retraining from scratch, so many proposed reforms are hard to test fairly.
