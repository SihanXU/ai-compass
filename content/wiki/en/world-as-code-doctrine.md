---
summary: "A world model should be an executable program of states and rules, written and revised by language models, rather than a neural video predictor."
---
## Beliefs

World-as-Code Doctrine agrees that agents need world models, but disagrees about their substance. Instead of learning to predict the next frame in pixel or latent space, write the world down as code: objects with attributes, actions with preconditions and effects, rules for how state changes. Language models are now fluent programmers, so they can draft these simulators from descriptions or observations, test them against experience, and patch them when predictions fail. Code makes the world model exact where it is known, inspectable when it is wrong, and directly usable for planning and search.

It sits just left of centre, because although the object of interest is the environment and its dynamics, that world is written as code, and in the lower Harness half because the world model lives outside the network as an executable artifact the system maintains. Its paradigm level is Revolutionary, positioning itself as a third way between symbolic planning and neural simulation.

## Arguments

- Language-model programs that compose perception and control APIs have driven robot behavior, showing that code is a practical interface between models and the physical world.
- Code-writing models can generate reward functions for complex robot skills, sometimes outperforming expert-written rewards.
- An explicit program world model supports exact lookahead and search, which approximate neural simulators struggle to provide over long horizons.

## Critiques

- Messy continuous physics, deformables and perception noise are hard to capture in hand-readable code.
- Synthesized world programs can be confidently wrong in ways that only show up far from the observed data.
- Video-world-model advocates argue that learned simulators scale with data while code-based ones scale with programmer (or model) effort.
