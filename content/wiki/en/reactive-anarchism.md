---
summary: "Robust behaviour comes from tight sensor-to-actuator reflexes, not from world models or plans; let the world be its own representation."
---
## Beliefs

Reactive Anarchism distrusts anything that sits between perception and action. Plans go stale, world models are wrong, and deliberation is too slow for a world that keeps moving. Its robots are built from simple behaviours, avoid obstacles, wander, follow walls, each mapping sensors directly to motors and layered so that higher behaviours can suppress lower ones. There is no central planner and no symbolic map; the world is consulted directly, every few milliseconds, instead of being remembered.

It sits deep on the World side and at the Harness extreme: intelligence is a system of many small reflex modules coupled through the environment, not one model holding a representation. Its old-guard shade reflects its age; this is a decades-old rebellion against classical AI planning that newer world-model enthusiasts now regard as a conservative position.

## Arguments

- Layered reactive control architectures produced mobile robots that navigated real, cluttered environments robustly at a time when planning-based robots were brittle and slow.
- Reflex loops respond at sensor rates, whereas any deliberative pipeline adds latency that matters for balance, collision avoidance and contact.
- Many successful commercial robots, including simple cleaning robots, rely mostly on reactive behaviours rather than rich world models.

## Critiques

- Purely reactive systems cannot do tasks that require memory, foresight or reasoning about things they cannot currently sense.
- Hand-layered behaviours become hard to design and debug as their number grows, and they do not learn on their own.
- Modern learned policies and world models now deliver both fast reaction and planning, making the strict "no representation" stance look dated.
