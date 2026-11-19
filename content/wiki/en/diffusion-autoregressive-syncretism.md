---
summary: "Autoregression and diffusion are complementary generative principles and belong together in one model, each used where it fits best."
---
## Beliefs

Diffusion-Autoregressive Syncretism refuses to pick a side in the great generative schism. Autoregressive models excel at discrete, sequential, symbolic content such as text; diffusion excels at continuous, high-dimensional content such as images and audio. Rather than forcing images into discrete tokens or forcing text through a denoiser, the syncretist builds one transformer that predicts the next token where tokens make sense and denoises continuous latents where they do not.

It sits at the very top of the chart, in the centre column. The Monolith position reflects the insistence on one shared network rather than an LLM handing prompts to a separate diffusion model. Its balance between Language and World reflects that it keeps language modelling while respecting continuous perceptual signals, which it refuses to quantize away. Its paradigm level is steady: hybrid objectives in one backbone extend the mainstream recipe rather than break from it, though the right mix is still being explored.

## Arguments

- Models trained with a next-token loss on text and a diffusion loss on image patches within one transformer scale well on both modalities.
- Autoregressive image generation with per-token diffusion heads avoids vector quantization and its information loss.
- Combining the two paradigms keeps the reasoning and instruction strengths of language models while matching diffusion's visual quality.

## Critiques

- Two objectives in one network complicate training dynamics, loss balancing and inference scheduling.
- Hybrid models inherit the inference cost of iterative denoising along with the sequential cost of autoregression.
- Purists on both sides argue that a single principle, scaled properly, will eventually make the hybrid unnecessary.
