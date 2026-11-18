---
summary: "A word's meaning is the pattern of contexts it appears in, so meaning can be learned from co-occurrence statistics alone."
---
## Beliefs

Distributional Semanticism rests on one old slogan: you shall know a word by the company it keeps. Words that appear in similar contexts have similar meanings, so a model that captures the statistics of contexts captures meaning, no dictionary, logic or perception required. Word embeddings made this concrete as geometry, with analogies as vector offsets, and contextual language models extended it from words to whole passages. In this view, next-token prediction is not a trick that happens to work; it is distributional semantics carried to its conclusion.

It sits near the Language edge (col 1) at mid-height. It is a theory of meaning rather than an architecture, so it is agnostic between monoliths and systems, but it firmly locates meaning in text. Its shade marks an established, somewhat senior view: the hypothesis is decades old and has quietly become the foundation of modern NLP, which makes its defenders more confident than combative.

## Arguments

- Embeddings learned purely from co-occurrence recover synonymy, analogy and semantic clusters that align well with human similarity judgments.
- Every large language model is in effect a distributional learner, and their broad semantic competence is strong evidence for the hypothesis.
- The approach needs only raw text, so it scales to any language or domain with a corpus, without annotation or ontology.

## Critiques

- Grounding camps argue that co-occurrence can tell you that 'red' is near 'crimson' but not what red looks like, so meaning is incomplete.
- Formal semanticists note that distributional similarity blurs crucial logical distinctions such as antonyms appearing in near-identical contexts.
- Statistical meaning inherits the biases and gaps of the corpus, so what is learned reflects usage, not truth.
