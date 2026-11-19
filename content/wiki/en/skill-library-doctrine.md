---
summary: "Agents should build and reuse a library of atomic skills, composing them into new tasks instead of learning every task from scratch."
---
## Beliefs

Skill-Library Doctrine believes competence is a toolbox, not a monolith. Pick, place, open, pour, navigate: each is learned or written once, verified, named and stored. New tasks are solved by composing existing skills, often with a language model or planner choosing the sequence, and genuinely new skills are added to the library when needed. Over time the library grows, and the agent becomes more capable without any single network getting bigger.

It sits just right of centre, toward World, and near the Harness end: it is about physical or simulated action, and its intelligence lives in a curated, growing collection plus the composer that uses it. Its Exploratory shade reflects a pragmatic, widely used design in both robotics and game agents that still steps away from the one-big-model mainstream. Its rivals are the generalist robot policy camps, which bet that a single large model will absorb all skills implicitly; the librarian prefers skills you can list, test and debug individually.

## Arguments

- Composing pretrained skills with a language-model planner lets robots follow long, novel instructions without new task-specific training.
- Storing skills as code or named policies makes them inspectable, testable and transferable across tasks.
- In open-ended environments, agents that accumulate a skill library keep improving, because later tasks build on earlier ones.

## Critiques

- Skills defined at the wrong granularity compose poorly, and transitions between skills are a common failure point.
- A fixed library cannot express behaviours that do not decompose neatly into existing primitives.
- Generalist policy camps argue that implicit skills inside one model transfer and blend more smoothly than a discrete catalogue.
