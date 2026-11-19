---
summary: "Reliable long-horizon behavior needs explicit symbolic planning; learned models should translate problems into formal planners, not replace them."
---
## Beliefs

Classical-Planning Restoration is the movement to bring the planning tradition of STRIPS operators, PDDL domains and heuristic search back to the center of agent design. Its members watched language models produce plausible-looking plans that violate preconditions, forget goals or loop, and concluded that what was missing was not more scale but a solver. Their preferred architecture lets learned models do what they are good at (parsing messy goals, perceiving states, proposing domain descriptions) and hands the actual sequencing to a sound, complete planner that can prove its plan achieves the goal.

It sits just right of centre because planning is about states, actions and effects in an environment, especially in robotics, and at the very bottom of the Harness axis because it is explicitly a hybrid system of model plus planner. Its shade is revolutionary: reviving classical planning breaks with today's scale-only recipe. It is a restoration, and proud of it.

## Arguments

- Translating natural-language problems into PDDL and calling an off-the-shelf planner has produced correct plans on problems where language models alone fail.
- Symbolic plans are verifiable: preconditions and effects can be checked before execution, which matters for robots and safety-critical settings.
- Decades of heuristic search research give planners strong guarantees and efficiency that learned methods do not yet match on combinatorial problems.

## Critiques

- Writing and maintaining accurate domain models is laborious, and the open world rarely fits a clean predicate vocabulary.
- The hard part often moves into the translation step, where language models can still introduce subtle errors.
- Reactive and end-to-end advocates argue that the world changes faster than a planner can replan, so explicit plans go stale.
