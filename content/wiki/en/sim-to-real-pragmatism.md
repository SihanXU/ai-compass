---
summary: "Trains robot policies in simulation at massive scale, then transfers them to real hardware through randomization and careful engineering."
---
## Beliefs

Sim-to-Real Pragmatism has done the math on robot time. A real robot collects experience at one second per second, breaks things and needs supervision. A GPU-parallel simulator runs thousands of robots at once, faster than real time, and nothing gets hurt. So train in simulation and close the reality gap with whatever works: domain randomization over textures, masses and friction, system identification, careful actuator modeling, a little real-world fine-tuning. No grand theory required, just policies that walk, grasp and balance when they leave the simulator.

It sits near the World edge and in the middle band: the policy may be a single network, but it lives inside an engineering pipeline of simulators, randomizers and deployment tooling. Its paradigm level is neutral. Sim-to-real is a mature, widely used methodology, especially for locomotion, and its practitioners care more about robots that work than about which ideology gets the credit.

## Arguments

- Domain randomization lets policies trained purely in simulation transfer to real robots by making the real world look like just another variation.
- Massively parallel simulation trains legged locomotion policies in minutes of wall-clock time, and these policies have run on real quadrupeds and humanoids.
- Simulation allows safe exploration of failures, which is essential for reinforcement learning on expensive hardware.

## Critiques

- Contact-rich manipulation, deformables and fluids remain hard to simulate faithfully, so the gap persists exactly where tasks are hardest.
- Real-data camps argue that simulated diversity is still invented by engineers and misses the true long tail of the real world.
- Building good simulation assets and reward functions is laborious, and the pipeline is often task-specific.
