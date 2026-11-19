---
summary: "Agents should learn a model of their environment and plan inside it, trying actions in imagination before taking them for real."
---
## Beliefs

Model-Based Planism holds that the smart way to act is to think first. Learn a dynamics model from experience, then use it to roll out candidate futures, score them and choose: by tree search, trajectory optimization or by training a policy on imagined experience. Every mistake made in imagination is a mistake not made in the world, which is why the planist sees model-free trial-and-error as wasteful, especially where real interaction is slow, expensive or dangerous.

It sits on the World side, just above mid-height. It is about physical and game environments with dynamics, and it combines a learned model with a planning procedure, a two-part system rather than one reflexive network or a sprawling agent harness. Its shade is Ultra-Revolutionary: planning in a learned latent space is still an active frontier, and the planist expects it to be how robots and agents eventually generalize beyond what they have directly practised.

## Arguments

- Learned-model agents have matched or surpassed strong model-free agents on board games and Atari while using far fewer environment interactions in many settings.
- Imagined rollouts allow agents to evaluate rare or dangerous situations without experiencing them, which matters for robotics.
- A separate dynamics model can be reused across tasks: change the reward and replan, rather than relearning a policy from scratch.

## Critiques

- Model errors compound over long horizons, and planners are good at exploiting exactly the places where the model is wrong.
- Planning at decision time is computationally expensive, which is hard to fit into fast control loops.
- Large model-free and imitation-learned policies often perform well enough that the extra machinery is hard to justify.
