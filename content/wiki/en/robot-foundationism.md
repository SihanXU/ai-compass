---
summary: "Believes general robot skill will come from foundation models trained on large, diverse real-world robot data, gathered through a deployment flywheel."
---
## Beliefs

Robot Foundationism applies the foundation-model recipe to physical action, with one stubborn amendment: the data must come from real robots in the real world. Language models had the internet; robots have nothing comparable, so the data must be manufactured through teleoperation, fleets of deployed machines and pooled datasets across labs and embodiments. Train a large vision-language-action policy on all of it, deploy, collect more, retrain. The flywheel, not a clever algorithm, is what will produce generalist robots.

It sits at the far World edge and in the upper-middle band: a single generalist policy, but one embedded in an operational system of data collection and deployment. Its paradigm level is progressive. It treats robotics as a scaling problem, which is a sharp break from decades of hand-engineered controllers, yet it is pragmatic about the messy logistics that scaling requires.

## Arguments

- Transformer policies trained on large sets of real demonstrations show improved generalization to new objects, scenes and instructions as data diversity grows.
- Pooling data across many robot embodiments yields positive transfer, so each lab's data helps everyone's robot.
- Real-world data avoids the sim-to-real gap entirely; what the policy learns is what the robot will actually face.

## Critiques

- Real data is slow and costly; even large robot datasets are tiny next to web text, and scaling may stall.
- Sim-to-real camps argue simulation offers orders of magnitude more experience at lower cost and with safe failure.
- Imitation from demonstrations caps performance at the demonstrator's skill and struggles with recovery from novel errors.
