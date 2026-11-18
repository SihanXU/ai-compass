---
summary: "Believes ever-longer context windows will replace retrieval systems and external memory, letting the model read everything at once."
---
## Beliefs

Long-Context Expansionism pursues territorial growth measured in tokens. Why build retrievers, chunkers, vector databases and memory managers when the model could simply read the whole codebase, the whole contract archive, the whole book series in one pass? Each expansion of the context window dissolves another piece of scaffolding. Attention is the most flexible retrieval mechanism ever invented; give it enough room, and it will find what it needs without a separate system guessing in advance what is relevant.

It sits left of center on the Language side and in the middle band: still a single model, but one that absorbs functions which harness builders would otherwise implement externally. Its paradigm level is neutral. Rotary embeddings, efficient attention kernels and distributed sequence parallelism have made very long contexts practical, and expansionists treat each new limit as a temporary border.

## Arguments

- Models with context windows of hundreds of thousands to millions of tokens can answer questions over entire books, codebases and video transcripts directly.
- In-context information can be used with full attention, avoiding the failure mode where a retriever misses the relevant passage.
- Long context enables many-shot in-context learning, adapting a model to a task with hundreds of examples and no fine-tuning.

## Critiques

- Studies show models use information in the middle of long contexts less reliably than at the beginning or end.
- Attention cost and memory grow with length, so very long contexts are slow and expensive per query compared with retrieval.
- Memory-focused camps argue a context window is not memory: it is erased after every session.
