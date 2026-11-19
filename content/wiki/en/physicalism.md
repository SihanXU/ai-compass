---
summary: "Holds that understanding physical dynamics comes before intelligence, so models should learn how objects and forces actually behave."
---
## Beliefs

Physicalism puts physics at the foundation of the curriculum. Before a system can plan, use tools or reason about other agents, it must know what happens when things push, fall, slide and break. That knowledge should be learned, ideally in structured forms such as graphs of interacting particles and objects, so that learned simulators predict how scenes evolve. Unlike its absolutist neighbor, it does not insist on hand-coding the laws; it wants models that discover dynamics from data while keeping a physical structure that makes discovery tractable.

It sits near the World edge and a little below centre, between monolithic world models and modular robotics stacks, leaning slightly toward the latter. Its paradigm level is Beyond Revolutionary: physics simulation and learned dynamics lie far from today's Transformer-plus-scale recipe, and Physicalism insists they become the core of AI rather than a niche of graphics and engineering.

## Arguments

- Graph-network simulators trained on particle and mesh data predict fluids, rigid bodies and cloth accurately over long rollouts and generalize to larger scenes than seen in training.
- Structured physical models need less data and extrapolate better than unstructured pixel predictors.
- Planning and control depend on reliable forward models; a robot that cannot predict consequences cannot act safely.

## Critiques

- Learned simulators often need privileged state, such as particle positions, that real sensors do not provide.
- Scale-first camps argue that large video and robot models will absorb physical intuition without explicit physical structure.
- Physical prediction alone does not deliver goals, language or social reasoning; it is necessary but far from sufficient.
