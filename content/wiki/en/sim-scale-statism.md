---
summary: "Robots should learn from massively parallel simulation, compressing years of experience into hours of GPU time."
---
## Beliefs

Sim-Scale Statism answers robotics' data shortage with industrial policy. Real robots are slow, fragile and expensive; simulated robots are fast, indestructible and can be cloned by the thousand on a single GPU. Run enough parallel environments, randomize their physics and appearance aggressively, and a policy can accumulate what would be centuries of real-world experience before it ever touches hardware. The state owns the simulator, and the simulator produces the data.

It sits in the upper band near the World edge, since everything it does is about physical bodies and dynamics. The Monolith lean comes from its preference for one large learned policy trained end to end in simulation, rather than hand-engineered controllers. Its paradigm score is mildly revolutionary: GPU-parallel simulation has already transformed locomotion, and the doctrine bets the same will happen for manipulation.

## Arguments

- GPU-based physics simulation runs thousands of environments in parallel, letting legged robots learn to walk in minutes of wall-clock time.
- Heavy domain randomization has enabled policies trained purely in simulation to perform dexterous in-hand manipulation on real hardware.
- Simulation provides perfect labels, safe failure and unlimited resets, none of which the real world offers.

## Critiques

- The sim-to-real gap remains stubborn for contact-rich manipulation, deformable objects and complex sensing.
- Building accurate simulated assets and scenes is itself labor-intensive hand engineering.
- Real-world data advocates argue that only physical interaction captures the long tail of conditions robots will face.
