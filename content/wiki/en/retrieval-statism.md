---
summary: "Holds that knowledge belongs in an external index rather than in model weights, with retrieval built into the model's core."
---
## Beliefs

Retrieval Statism draws a firm line between thinking and remembering. Weights should hold skills: reading, reasoning, composing. Facts should live in a large, updatable index that the model consults as it works. Memorizing the world into parameters is wasteful, stale the day training ends and impossible to audit. A model that retrieves can be smaller, cites its sources, and stays current by re-indexing instead of retraining. The state's job is to build the great library and make retrieval a native organ of the model.

It sits on the Language side, near the Harness end, right beside the looser RAG pipelines of RAG Mutualism. What sets it apart is that it treats retrieval as part of the model itself, often trained jointly, rather than as a pipeline bolted on afterward. Its paradigm level is Steady: retrieval-augmented models are well studied and widely deployed, though the purist vision of tiny reasoners over enormous indexes is still argued over.

## Arguments

- Retrieval-augmented models can match much larger parametric models on knowledge-intensive tasks while using far fewer parameters.
- Updating the index changes what the model knows without retraining, which fixes staleness and enables removal of specific content.
- Retrieved passages provide provenance, making answers easier to verify.

## Critiques

- Long-context camps argue that simply placing documents in a very large context window removes the need for a separate retriever.
- Retrieval quality becomes the bottleneck; wrong or missing passages lead to confidently wrong answers.
- Some knowledge is better internalized: reasoning fluently about a domain requires more than looking up facts one at a time.
