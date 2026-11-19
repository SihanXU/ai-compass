---
summary: "Every capability should be exposed as a typed API, with the model acting as a federal coordinator that calls them through structured function calls."
---
## Beliefs

Function-Call Federalism takes tool use and adds a constitution: schemas. Each capability, whether a database, a payment service, an image generator or another model, is a sovereign state with its own typed interface; the language model is the federal government that routes requests and composes results, but never reaches inside. Structured JSON arguments, validated outputs and clear contracts keep the union orderly, and new states can join simply by publishing a schema.

It sits on the Language side, left of centre, and in the Harness half: the model speaks in structured text and the work is done by a federation of services. Its steady shade reflects that function calling is standard infrastructure now. Where tool-use liberals celebrate the model's freedom to use tools, federalists care about the rules that make that freedom safe and composable: typed parameters, permissions and predictable failure.

## Arguments

- Typed schemas make tool calls machine-checkable, reducing malformed requests and making failures explicit.
- Wrapping capabilities as APIs lets systems integrate specialized models and services that outperform any single generalist on their niche.
- Models fine-tuned on large API collections can learn to select and call APIs they were not explicitly hand-wired for.

## Critiques

- Computer-use camps argue that most software has no clean API, and only a GUI-level agent can reach it.
- Large tool catalogues strain context and selection accuracy, and schemas drift as services change.
- Monolith advocates see the federation as glue code that a sufficiently capable single model will eventually absorb.
