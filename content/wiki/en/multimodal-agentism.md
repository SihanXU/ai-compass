---
summary: "An agent should see, hear, speak and act across modalities, orchestrating specialist perception and generation tools around a central planner."
---
## Beliefs

Multimodal Agentism holds that the real world does not arrive as clean text, so an agent confined to text is confined, full stop. It wants agents that read screenshots and photos, listen to audio, talk back in speech, generate images when needed, and take actions in apps and environments. Unlike the omni-model camp, it is happy to get there by delegation: a planner model decides what needs doing and calls vision, speech, OCR, detection or generation modules as tools, stitching their outputs into a plan.

It sits at the exact middle of the Language-World axis, reflecting its even-handed appetite for every modality, and in the Harness half, because multimodality is achieved by coordinating components rather than by fusing everything into one network. Its paradigm level is mildly progressive.

## Arguments

- Systems that let a language model dispatch tasks to many specialist vision and audio models showed broad multimodal capability without training a single giant model.
- Delegation lets each component be upgraded independently: a better speech recognizer or detector improves the whole agent at once.
- Real tasks such as operating phones, reading documents or handling meetings are inherently multimodal, so agent benchmarks increasingly require it.

## Critiques

- Passing information between modules through text descriptions loses detail; native multimodal models see things a caption never mentions.
- Error compounds across a chain of specialists, and latency adds up for every hand-off.
- Omni-model advocates argue that delegation is a transitional architecture that native models will absorb.
