---
summary: "Many simple, cheap robots following local rules can achieve robust collective behavior that no single complex robot could."
---
## Beliefs

Swarm Robotics takes its inspiration from ant colonies, bird flocks and fish schools. Each unit is deliberately simple: limited sensing, short-range communication, a handful of local rules. No unit holds a global map or a master plan. Yet together the swarm can aggregate, form shapes, explore terrain, carry objects or cover an area, and it degrades gracefully when individual units fail. Intelligence, in this view, is a property of the collective and its interactions, not of any single brain.

It sits at the far World edge, since everything happens through bodies in physical space, and in the Harness half, since behavior comes from a system of many interacting parts rather than one end-to-end model. Its paradigm level is mildly progressive: an established field that keeps looking radical next to the one-big-robot mainstream.

## Arguments

- Experiments with around a thousand small robots self-assembling into programmed shapes showed that purely local rules can produce reliable global structure.
- Classic flocking models demonstrate that three local rules (separation, alignment, cohesion) suffice for realistic collective motion.
- Redundancy gives robustness: losing a few units barely matters, unlike losing the one expensive humanoid.

## Critiques

- Designing local rules that reliably produce a desired global behavior is hard, and emergent behavior can be equally hard to predict or certify.
- Swarm demos are often slow and confined to lab arenas, with limited tasks of practical value so far.
- Foundation-model advocates argue that one capable general-purpose robot is more useful than many that can only do collective tricks.
