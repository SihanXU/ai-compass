---
summary: "Intelligent systems should be built from interchangeable, well-specified components that can be freely composed, like building blocks."
---
## Beliefs

Composable Liberalism treats AI capability as a set of parts rather than a single artifact. A retriever, a reasoner, a vision encoder, a code executor, a verifier: each should have a clear interface, be swappable, and be composable into larger programs whose structure is visible and debuggable. Its intellectual lineage runs from Unix pipes through neural module networks to declarative language-model programming, where pipelines are written as modules and the framework handles prompting and optimization.

It sits right at the middle of the Language-World axis, indifferent to whether a block processes words, pixels or actions, and at the very bottom of the Harness axis because the whole point is the architecture that connects components. It is "liberal" in its pluralism: any vendor's model, any modality, any tool is welcome so long as it honors the interface. Its paradigm level is neutral.

## Arguments

- Neural module networks showed that composing small learned modules according to a question's structure supports compositional reasoning in visual question answering.
- Declarative frameworks for language-model pipelines let the same program be re-optimized for a new model, making systems portable across model generations.
- Composition gives clear failure attribution: when a modular system breaks, you can test each block in isolation.

## Critiques

- Interfaces between modules are bottlenecks that discard information a jointly trained model would keep.
- Monolith advocates point out that large end-to-end models have repeatedly beaten carefully composed systems once enough data and compute arrive.
- Composition shifts difficulty to orchestration, and complex block diagrams can be as opaque in practice as a single network.
