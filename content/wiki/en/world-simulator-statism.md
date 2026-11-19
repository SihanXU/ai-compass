---
summary: "Large video generation models, trained at scale, are learning to simulate the physical world and will become general world simulators."
---
## Beliefs

World-Simulator Statism reads every leap in video generation as a leap in physics understanding. To render a glass falling and shattering convincingly for ten seconds, the argument goes, a model must implicitly track objects, gravity, occlusion and cause and effect. Scale the video model far enough and it stops being a content tool and becomes a general-purpose simulator: a place where agents can be trained, plans can be rehearsed and counterfactuals can be rendered on demand.

It sits near the top of the chart, right of centre. The Monolith stance comes from its faith in one large generative model rather than a hand-built physics engine plus renderer. Its paradigm level is Mainstream: it rides today's scale-the-generative-model recipe, even if treating a video model as a simulator is still a contested claim the doctrine is happy to stake its reputation on.

## Arguments

- Video models trained only on pixels show emergent 3D consistency, object permanence over short horizons and plausible camera motion.
- Interactive generative environments learned from video suggest action-conditioned world simulation is feasible without a physics engine.
- Video is abundant, so a simulator learned from it could cover far more of reality than any hand-authored engine.

## Critiques

- Generated videos still violate conservation laws, merge objects and lose track of state over longer horizons.
- Visual plausibility is not physical accuracy; a simulator that looks right can still be useless for control.
- Latent-prediction advocates argue that rendering every pixel is the wrong objective for learning dynamics.
