---
summary: "Games are the ideal training ground for general agents: rich, cheap, safe worlds with clear goals and unlimited replays."
---
## Beliefs

Game-Agent Doctrine holds that games are where artificial agents learn to act. A game is a world with rules, consequences, long horizons, opponents and a score, and it can be reset a million times at no cost. From board games to real-time strategy to open-world sandboxes, each step up in game complexity has demanded a new capability: search, credit assignment over long horizons, partial observability, multi-agent strategy, open-ended exploration. Mastering games is not a stunt; it is a curriculum.

It sits well toward World, because games are simulated environments where agents perceive and act rather than read, and in the Harness half, because modern game agents combine models with search, skill libraries, memory and game APIs. Its paradigm level is mildly progressive: it has a long and celebrated history, but keeps finding new frontiers.

## Arguments

- Landmark results in Atari, Go and real-time strategy each introduced techniques (deep Q-learning, learned value functions with tree search, large-scale multi-agent training) that spread far beyond games.
- Open-world games such as Minecraft offer open-ended goals, tool crafting and exploration, making them natural testbeds for lifelong-learning agents.
- Games give exact, automatic rewards and perfect reproducibility, which most real-world tasks cannot.

## Critiques

- Superhuman play has often failed to transfer: skills honed in one game rarely generalize to another, let alone to the physical world.
- Game-specific APIs and privileged state make agents look more capable than they would be from raw perception.
- Field roboticists note that real environments are noisy, slow and unresettable, which is exactly what games abstract away.
