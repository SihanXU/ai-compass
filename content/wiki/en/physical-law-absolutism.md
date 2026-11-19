---
summary: "Insists that learned models must respect known physical laws, built in as hard constraints, not merely hoped for from data."
---
## Beliefs

Physical-Law Absolutism has seen one too many generated videos where a glass passes through a table and a ball accelerates for no reason. Its answer is non-negotiable: conservation of energy, momentum and mass are not suggestions to be learned approximately from enough footage. They are laws, and the model should obey them by construction. Put the differential equations in the loss, bake symmetries into the architecture, parameterize dynamics through Hamiltonians or Lagrangians, and the model will generalize where pure data fitting fails.

It sits in the middle of the Language-World axis, since its laws are written in equations and symbols as much as they are observed in the world, and in the upper half toward the Monolith because it wants one model whose structure guarantees lawful behavior rather than a checker bolted on afterward. Its paradigm level is Ultra-Revolutionary: it revives a long scientific-computing tradition of hard physical structure and rejects the mainstream bet that scale alone will teach models physics.

## Arguments

- Physics-informed losses and conservation-preserving architectures let models extrapolate beyond the training range and learn from far less data than unconstrained networks.
- Hard constraints guarantee properties such as energy conservation over long rollouts, where unconstrained learned simulators tend to drift.
- In science and engineering, a model that violates known laws is not merely inaccurate but untrustworthy, regardless of its benchmark score.

## Critiques

- Scale-first camps reply that hand-built priors are exactly what the bitter lesson warns against, and that big video models are learning physics implicitly.
- Real scenes involve friction, contact, deformables and fluids whose governing equations are messy or unknown, limiting how much can be hard-coded.
- Physics-informed training can be hard to optimize, with stiff loss landscapes that need careful tuning.
