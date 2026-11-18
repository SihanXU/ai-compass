---
summary: "Perception should be spread across countless cheap networked sensors that process locally and share signals, like neurons in a planetary nervous system."
---
## Beliefs

Sensor-Network Anarchism imagines perception without a centre. Instead of one powerful robot or one model looking at the world through one camera, it wants thousands of cheap cameras, microphones, accelerometers and air-quality sensors, each running a tiny model on-device, gossiping summaries to their neighbours. The world is observed from everywhere at once, and understanding emerges from the network rather than from any single vantage point. "Every camera is a neuron" is meant only slightly as a metaphor.

It sits on the World side, because the raw material is continuous physical sensing, and at the Harness extreme, because the "model" is a distributed system of nodes, protocols and aggregation rules. The neutral-leaning shade reflects that much of its toolkit, from sensor fusion to edge inference and federated updates, is established engineering applied with anarchic ambition.

## Arguments

- Many cheap, distributed viewpoints resolve occlusion and coverage problems that no single sensor can, however good its model.
- Processing on the node and sending only compact summaries saves bandwidth and keeps raw data local, which helps privacy compared with streaming everything to a cloud.
- Decentralised networks have no single point of failure; losing a node degrades perception gracefully rather than blinding the system.

## Critiques

- A planet covered in always-on sensors is a surveillance infrastructure no matter how decentralised its architecture, and critics doubt it can be governed well.
- Tiny on-device models are weak, and fusing their noisy, unsynchronised outputs is a hard, unsolved engineering problem.
- Maintaining, powering and securing thousands of field devices costs far more than the hardware price suggests.
