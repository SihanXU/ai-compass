---
summary: "Control should be layered, with slow high-level planners setting goals and fast low-level controllers executing them."
---
## Beliefs

Hierarchical Control holds that no single loop can be both deliberate and fast. A high level reasons over long horizons and abstract goals, 'go to the kitchen, open the fridge'; a middle layer turns these into subgoals or skills; a low level runs at hundreds of hertz to keep the arm stable and the feet planted. Each layer works at its own timescale and abstraction, passing goals down and status up, much as cortex and cerebellum are often described as dividing labour.

It sits on the World side, near the Harness end: it is about physical action, and it is a layered system rather than one flat policy. Its ultra-revolutionary shade reflects that hierarchy is an old robotics principle revived against the flat end-to-end mainstream, and a live topic in learning, from options and feudal reinforcement learning to recent systems that put a vision-language model on top of a fast action policy. The hierarchist expects every capable robot to end up layered, whatever its marketing says.

## Arguments

- Temporal abstraction shortens effective planning horizons, making long tasks tractable for learning and search.
- Separating fast reactive control from slow deliberation lets each run at the rate it needs, which matters on real hardware.
- Reusable low-level skills or options can be recombined by a high-level policy for new tasks without retraining from scratch.

## Critiques

- Choosing the right levels and interfaces is often hand-designed, and a poor decomposition caps performance.
- Errors at the interface, goals the low level cannot achieve, are a persistent failure mode.
- End-to-end camps argue that flat policies trained at scale learn their own implicit hierarchy without imposed structure.
