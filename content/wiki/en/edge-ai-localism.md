---
summary: "Inference belongs on the device, close to the sensors and the user, for latency, privacy, cost and resilience."
---
## Beliefs

Edge-AI Localism holds that sending every camera frame, voice command and sensor reading to a distant datacenter is wasteful, slow and fragile. Models should run where the data is born: on phones, cameras, cars, drones, wearables and microcontrollers. That demands a craft of its own (efficient architectures, quantization, pruning, distillation, hardware-aware design), and the localists treat these constraints as a feature: a model that fits in a few megabytes and answers in milliseconds is a better engineered artifact than one that needs a rack.

It sits on the World side because edge inference is mostly about perceiving and acting in the physical world (vision, audio, sensors) rather than generating long text, and near the bottom of the Harness axis, because intelligence is spread across many small devices cooperating with, but not dependent on, the cloud. Its paradigm level is exploratory: an old engineering discipline, newly urgent as models grow, that pushes against the cloud-centred mainstream.

## Arguments

- Efficient convolutional architectures designed for mobile vision showed that accuracy can be traded smoothly against compute with a handful of hyperparameters.
- Pruning, quantization and weight sharing can shrink networks by large factors with little accuracy loss, making on-device deployment feasible.
- Local inference works offline, keeps personal data on the device and avoids network latency, which matters for safety-critical control.

## Critiques

- Edge models are necessarily smaller and lag cloud models in capability, especially for open-ended reasoning and generation.
- Fragmented hardware and toolchains make deployment and updates laborious across thousands of device types.
- Scale advocates argue that falling inference costs and better connectivity will make most on-device compromises unnecessary.
