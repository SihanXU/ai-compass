---
summary: "A model is only an engine; the harness of tools, loops, memory and checks around it decides what an agent can actually do."
---
## Beliefs

Harness Liberalism holds that the same model can be a mediocre chatbot or a capable agent depending on what is wrapped around it. The harness is everything outside the weights: the loop that calls the model repeatedly, the tools it can invoke, the file system and shell it can touch, the memory it reads, the verifiers and tests that catch its mistakes, and the interface design that makes all of this legible to the model. Good harness design is engineering, and engineering compounds.

It sits left of center (the harness talks to the model in text) and at the Harness end of the chart, though it still respects the model as the engine. It is "liberal" rather than radical: unlike its nihilist cousin, it does not claim the model is irrelevant, only that a good engine without a chassis goes nowhere. Its paradigm level is mainstream.

## Arguments

- Interleaving reasoning with actions and observations, as in ReAct-style loops, beats reasoning alone on tasks that need fresh information.
- Work on agent-computer interfaces shows that redesigning tool commands and feedback formats, with the model held fixed, substantially changes software-engineering success rates.
- Verifiers, tests and retries turn a model with a modest single-shot success rate into a system with much higher end-to-end reliability.

## Critiques

- Monolith advocates note that harness tricks are routinely absorbed into the next model generation, so harness investment depreciates fast.
- Complex harnesses become brittle bespoke software, tuned to one model's quirks and breaking on the next upgrade.
- Credit assignment is murky: impressive agent demos are hard to attribute to harness versus model, which invites overclaiming.
