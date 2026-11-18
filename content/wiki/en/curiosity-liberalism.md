---
summary: "Agents should be driven by intrinsic motivation, rewarding novelty and learning progress, rather than waiting for external rewards."
---
## Beliefs

Curiosity Liberalism believes that agents explore best when they are free to follow their own interest. External rewards are sparse, late and often misleading; an agent that only chases them will wander aimlessly or exploit a loophole. Give it an intrinsic reward instead, for surprise, prediction error, novelty or measurable learning progress, and it will seek out the parts of the world it does not yet understand, collecting skills and knowledge that later tasks can use.

It sits on the World side (col 10) at mid-height. Curiosity is mostly studied in environments with states and dynamics, from games to robots, so it leans toward World; and it is a principle for the learning signal rather than a commitment to one architecture. Its shade is fairly revolutionary, because it questions the standard reinforcement-learning contract in which the designer specifies the objective and the agent obeys. The liberal stance is that a good agent is one that sets some of its own goals.

## Arguments

- Intrinsic rewards enable progress in sparse-reward environments where purely extrinsic agents barely improve, as shown on hard-exploration games.
- Curiosity-driven pretraining produces diverse behaviours and representations that can be reused for downstream tasks.
- Learning-progress signals naturally create a curriculum, steering the agent toward tasks that are neither trivial nor impossible.

## Critiques

- The noisy-TV problem: agents rewarded for unpredictability can get stuck staring at randomness instead of learning anything useful.
- Intrinsic rewards are themselves hand-designed objectives, so the freedom is narrower than the name suggests.
- Curious exploration in the real world can be costly or unsafe, so the doctrine sits uneasily with deployment constraints.
