---
summary: "Whatever the models are, capability comes from the engineered system around them: tools, memory, evaluation and orchestration."
---
## Beliefs

Systems Pragmatism declines to take a side in the debate over whether intelligence is made of language, pixels or physics. Its attention is on the layer above. Models come and go, and whatever the current best one is, it will be wrapped in retrieval, tool calls, state management, routing, caching, evaluation suites and monitoring before it does anything useful. That layer is where reliability, cost and real-world capability are decided, and it is where an engineer's effort compounds.

The school is pragmatic about paradigms too. If a new architecture or modality arrives and works better, the system swaps it in behind the same interfaces. It treats models as replaceable components with measurable behaviour and favours declarative pipelines, good observability and regression tests over clever prompts. Its motto is less a theory of intelligence than a theory of delivery.

## Arguments

- Most of the code in deployed machine learning systems is not the model, and most failures come from the surrounding data, configuration and glue.
- Treating model calls as modules in an optimisable program makes pipelines portable across models and easier to improve.
- Evaluation and monitoring infrastructure outlives any single model generation, so it is the safest long-term investment.

## Critiques

- Monolith advocates warn that each new model generation absorbs whole layers of the system, turning careful engineering into dead weight.
- Being agnostic about modality can become an excuse to never ask what intelligence actually requires.
- Layered systems accumulate their own complexity and failure modes, and can be harder to reason about than the model inside.
