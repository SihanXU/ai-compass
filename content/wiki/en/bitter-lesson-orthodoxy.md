---
summary: "General methods that scale with computation, namely search and learning, always beat clever human-designed priors in the long run."
---
## Beliefs

Bitter-Lesson Orthodoxy rests on a much-quoted reading of history: in chess, Go, speech, vision and language, researchers repeatedly encoded their own understanding of a domain into systems, won in the short term, and were then overtaken by methods that simply exploited more computation. The lesson is "bitter" because it insults the researcher's intuition. The orthodox response is discipline: resist the urge to build in what you know, and invest in methods that improve as compute grows.

It sits at the very top of the chart, just left of centre. The Monolith placement follows naturally, since hand-crafted modules and pipelines are exactly the kind of human prior the doctrine distrusts. Its language lean is mild and mostly historical, because language is where the lesson was most recently relearned. Its paradigm level is orthodox: the doctrine is now taught rather than discovered.

## Arguments

- The record across many AI subfields is unusually consistent: engineered features lost to learned ones, handcrafted evaluation functions to self-play search.
- Self-play systems that discarded human game knowledge went on to exceed systems built on it.
- Priors that help at small scale often become constraints at large scale, so betting on generality is the safer long-term wager.

## Critiques

- The lesson is applied in hindsight; convolutions and attention are themselves human priors that happened to scale well.
- It can become an excuse to skip careful thinking about data, objectives and inductive bias.
- Domains with scarce data or expensive interaction, such as robotics, have not yet obviously obeyed it.
