---
summary: "Seeing is something an agent does, choosing where to look and how to move, not a passive mapping from images to labels."
---
## Beliefs

Active-Perception Doctrine rejects the idea of vision as a function applied to a fixed photograph. Real perceivers move their eyes, heads, hands and bodies to get the view they need: they peek around occluders, turn objects over, zoom in on the ambiguous bit and ignore the rest. Perception is therefore a control problem, with gaze, viewpoint and sensing as actions chosen to reduce uncertainty about the task at hand.

It sits on the World side (col 10) at mid-height. It is firmly about physical perception, but it is not committed to one giant model: a learned gaze policy, a next-best-view planner or an attention module inside a larger system all count. Its shade is fairly revolutionary, not because the idea is new (it is decades old) but because mainstream vision, trained on static internet images, still largely ignores it. The doctrine is waiting for robotics and video to make the old idea unavoidable.

## Arguments

- Choosing views or glimpses can reduce the compute and data needed for recognition, since the agent processes only informative regions.
- Occlusion, ambiguity and fine detail often cannot be resolved from one image but are trivial after a small camera or hand movement.
- Static internet datasets bake in photographer bias; agents that choose their own viewpoints learn from a distribution closer to deployment.

## Critiques

- Passive models trained at scale already handle many cases that active perception was supposed to require, reducing the practical payoff.
- Learning gaze or viewpoint policies adds a reinforcement-learning problem, with all its sample inefficiency and instability.
- Benchmarks for active perception are scarce and hard to standardize, so claims are difficult to compare.
