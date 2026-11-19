---
summary: "No model should rule; a free market of models, with routers sending each request to the cheapest one that is good enough, wins."
---
## Beliefs

Model-Market Anarchism refuses loyalty to any single model. Every query is a small procurement decision: a router estimates how hard it is and sends it to the cheapest model likely to answer well, escalating to an expensive frontier model only when needed. Models compete on price, latency and quality per task, and the best "AI" is whatever mix the market clears at today. Vendor lock-in is the enemy; interchangeable endpoints are the ideal.

It sits at the Harness extreme, because the intelligence of the system lies in the routing, caching and cascading logic rather than in any one set of weights, and well over on the World side, since it is agnostic about modality and will buy whatever model the task calls for, not only language ones. Its Neutral shade fits: this is less a scientific revolution than an economic one.

## Arguments

- Cascades that try cheap models first and escalate only on low confidence have matched the quality of the strongest single model at a large fraction lower cost.
- Learned routers trained on preference data can decide between a strong and a weak model per query and preserve most of the strong model's quality while cutting calls to it.
- A competitive market of interchangeable models keeps prices falling and protects users from any single provider's outages or policy changes.

## Critiques

- Routing errors are silent: a hard query misjudged as easy gets a confident wrong answer, and the user never sees the better model's version.
- Different models have different formats, tool-calling quirks and safety behaviours, so "interchangeable" is often a leaky abstraction.
- Optimising for the cheapest acceptable answer can starve investment in the frontier models the whole market ultimately depends on.
