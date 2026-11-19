---
summary: "Many small, cheap models sampling, voting and collaborating can match or beat one giant model at a fraction of the cost."
---
## Beliefs

Swarm Collectivism bets on the crowd. Instead of one frontier model answering once, it runs many smaller models or many samples, lets them propose, critique, vote and aggregate, and trusts the collective output. Diversity of errors is the secret: if the members fail in different ways, majority voting and layered aggregation cancel much of the noise. A swarm is also cheap to grow, easy to run on commodity hardware and hard to monopolise.

It sits in the lower, Harness half of the chart, because capability is a property of the ensemble and the protocol that combines it, not of any one set of weights, and left of centre on the Language side, because its members mostly communicate and vote in text. The Exploratory shade, leaning toward paradigm shift, comes from its direct challenge to the idea that the path forward is one ever-larger model.

## Arguments

- Simple sampling-and-voting over many agent instances has been reported to improve accuracy steadily as the number of agents grows, across reasoning and coding tasks.
- Layered mixture-of-agents setups, where models refine each other's answers, have outperformed single strong models on instruction-following evaluations using only open models.
- Self-consistency, majority voting over multiple reasoning chains, is a well-established way to buy accuracy with inference compute instead of parameters.

## Critiques

- Ensembles of models trained on similar data share blind spots, so voting amplifies correlated errors as often as it cancels independent ones.
- Gains from more samples saturate, and on genuinely hard problems a crowd of weak reasoners rarely finds what a stronger single model can.
- Running many models per query can end up costing as much as calling one larger model, eroding the efficiency argument.
