---
summary: "One generalist policy should control every robot body, from arms to quadrupeds to humanoids, trained on pooled cross-embodiment data."
---
## Beliefs

Robot-Foundation Imperialism wants to do for robots what pretraining did for text: pool data from every lab, every arm, every gripper and every mobile base into one corpus, and train one policy that runs on all of them. Each embodiment is a province with its own customs (joint counts, camera placements, control rates), but the empire insists they share a common language of manipulation and locomotion. Specialist per-robot policies are seen as feudal fragmentation.

It occupies the top-right corner of the chart: maximally World, because it lives entirely in physical action, and maximally Monolith, because one model must cover every body. Its paradigm score leans revolutionary. Cross-embodiment training at scale is young, and the doctrine is betting that robotics will follow the same scaling path as language and vision.

## Arguments

- Pooling datasets across many robot types has shown positive transfer, with generalist policies outperforming policies trained on a single robot's data.
- A shared policy amortizes the enormous cost of robot data collection across the whole field.
- Open generalist policies can be fine-tuned to new embodiments with modest data, lowering the barrier for new hardware.

## Critiques

- Embodiments differ in kinematics, sensing and dynamics so much that a single action space can be a lowest common denominator.
- The pooled data is still tiny next to web text or video, so "foundation" may be premature.
- Morphology-focused rivals argue the body itself does much of the computation, so one brain for every body misses the point.
