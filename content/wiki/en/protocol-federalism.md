---
summary: "Agents and tools should meet through open, standard protocols, so any model can plug into any capability without bespoke glue."
---
## Beliefs

Protocol Federalism thinks the agent ecosystem's real bottleneck is integration, not intelligence. Every product reinventing its own tool format, auth scheme and context plumbing produces an N-by-M mess of adapters. The federalist answer is a common constitution: a small, open protocol that describes tools, resources and prompts, so servers written once can be used by any compliant client and any model. Sovereign tool providers keep their autonomy; they just agree on how to talk.

It sits at the center of the Language-World axis, since protocols are neutral about what flows through them (text, files, screenshots, sensor reads), and in the Harness half, because it is pure system architecture around the model. Its paradigm level is mildly progressive: standards are not glamorous, but they are how the web, USB and package managers won.

## Arguments

- Standard interfaces turn integration cost from multiplicative to additive: each tool and each client implements the protocol once.
- A shared protocol makes capabilities discoverable at runtime, so agents can learn what tools exist instead of having them hard-coded.
- Open specifications reduce lock-in to any single model vendor, letting users swap models while keeping their tool ecosystem.

## Critiques

- Every protocol becomes a security surface: tool descriptions and returned content are channels for prompt injection and over-broad permissions.
- Standards can freeze immature abstractions too early, and committee-grown specs tend to accumulate complexity.
- Computer-use advocates argue that the screen and keyboard are already a universal protocol, making bespoke tool servers redundant.
