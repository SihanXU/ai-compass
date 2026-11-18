---
summary: "Autoregression and diffusion are complementary generative principles and belong together in one model, each used where it fits best."
---
## Beliefs

Diffusion-Autoregressive Syncretism refuses to pick a side in the great generative schism. Autoregressive models excel at discrete, sequential, symbolic content such as text; diffusion excels at continuous, high-dimensional content such as images and audio. Rather than forcing images into discrete tokens or forcing text through a denoiser, the syncretist builds one transformer that predicts the next token where tokens make sense and denoises continuous latents where they do not.

It sits in the upper band, slightly right of center. The Monolith position reflects the insistence on one shared network rather than an LLM handing prompts to a separate diffusion model. The lean toward World reflects its respect for continuous perceptual signals, which it refuses to quantize away. Its paradigm score leans revolutionary: hybrid objectives in one backbone are recent, and the right recipe is still being explored.

## Arguments

- Models trained with a next-token loss on text and a diffusion loss on image patches within one transformer scale well on both modalities.
- Autoregressive image generation with per-token diffusion heads avoids vector quantization and its information loss.
- Combining the two paradigms keeps the reasoning and instruction strengths of language models while matching diffusion's visual quality.

## Critiques

- Two objectives in one network complicate training dynamics, loss balancing and inference scheduling.
- Hybrid models inherit the inference cost of iterative denoising along with the sequential cost of autoregression.
- Purists on both sides argue that a single principle, scaled properly, will eventually make the hybrid unnecessary.
