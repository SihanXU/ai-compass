---
summary: "Intelligent behavior emerges from layered, reactive sensorimotor modules coupled directly to the world, without a central symbolic world model."
---
## Beliefs

Subsumption Doctrine is the classic rebellion against "sense, model, plan, act". It builds robots from layers of simple behaviors, each wired directly from sensors to actuators: avoid obstacles, wander, explore, seek goals. Higher layers can suppress or inhibit lower ones, but every layer is a complete, working behavior on its own, so the robot functions from day one and gains competence as layers are added. There is no central world model to keep updated, because, as the motto goes, the world is its own best model.

It sits well over on the World side, since everything is about real-time interaction with the physical environment, and in the lower Harness half because behavior comes from an explicit architecture of interacting modules rather than one learned model. Its shade is Exploratory, leaning toward paradigm shift: it revives a foundational idea of behavior-based robotics, now cited more than built, but never quite refuted.

## Arguments

- Layered control systems built this way produced mobile robots that operated robustly in real, unstructured environments when planning-based robots of the era struggled.
- Removing the central world model removes its latency and brittleness: reactions happen at sensor speed.
- Incremental layering is good engineering, since each new layer can be tested on a robot that already works.

## Critiques

- Purely reactive layers scale poorly to tasks requiring memory, long-horizon planning or abstract reasoning.
- Hand-designing layers and their suppression links becomes unwieldy as behaviors multiply.
- Modern learning-based and world-model approaches argue that internal representations are exactly what generalization requires.
