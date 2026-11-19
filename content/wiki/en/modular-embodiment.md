---
summary: "Intelligence is grounded in perceiving and acting in the world, but it is built as a system of perception, memory, planning and control modules rather than one end-to-end policy."
---
## Beliefs

Modular Embodiment agrees with the embodied camp on the first question and disagrees on the second. Intelligence, it holds, is not something that can be read off text; it comes from sensing a physical world, acting on it and living with the consequences. But a robot that works is not a single network mapping pixels to torques. It is a system: perception that builds a map of objects and space, memory that keeps track of what was seen, a planner that reasons over goals and constraints, and controllers that execute motion safely.

Learned components are welcome inside that system, including large pretrained models for perception or high-level task decomposition. What the school rejects is the idea that the whole loop should be trained as one opaque policy. Interfaces between modules make failures diagnosable, let parts be swapped and certified, and let decades of control and estimation theory keep doing useful work. It has no strong view on whether the learned parts follow today's recipe or something newer.

## Arguments

- Pairing a language model's task knowledge with learned affordance and skill modules lets robots carry out long instructions that neither part handles alone.
- Explicit state estimation and planning give guarantees and debuggability that safety-critical machines need.
- Modules can be upgraded independently, so progress in vision or control transfers without retraining everything.

## Critiques

- End-to-end advocates argue that hand-drawn interfaces lose information and that errors compound across module boundaries.
- Integration work dominates: much of the effort goes into glue rather than intelligence.
- Systems tuned for one robot and setting often fail to generalise to new bodies or environments.
