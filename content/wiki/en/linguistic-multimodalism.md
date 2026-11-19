---
summary: "Aims at a fully multimodal model that understands and generates every modality, using language modeling as the engine to get there."
---
## Beliefs

Linguistic Multimodalism reverses its neighbor's priorities: multimodality is the goal, language the means. The destination is a model that reads and writes images, audio and video as fluently as text. The vehicle is the machinery that already works, autoregressive sequence modeling with a language-model backbone, extended so every modality becomes tokens in one shared stream. Language is not where thinking must happen; it is the proven training recipe that will carry all modalities along.

It sits on the Language-World midline, near the Monolith end at the top: one model, many modalities. Its paradigm level is Orthodox. It borrows the confidence of the language-model era but spends it on outputs that are not words, aiming for an any-to-any system that can draw, speak and caption with the same weights.

## Arguments

- Early-fusion, mixed-modal token models trained like language models can generate interleaved text and images in a single sequence.
- Reusing the LM training stack means multimodal generation inherits mature tooling, scaling behavior and in-context learning.
- Tasks such as editing an image from an instruction, or answering with a diagram, need multimodal outputs that language-only reasoning cannot provide.

## Critiques

- Multimodal Linguism replies that most value still lies in reasoning, which happens in language anyway; generation is a costly add-on.
- Diffusion and vision-native camps argue that discrete tokens degrade image and audio quality compared with continuous generative models.
- Training stability and modality imbalance become serious problems when one sequence model must serve every modality at once.
