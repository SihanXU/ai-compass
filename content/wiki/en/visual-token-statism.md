---
summary: "Pixels should be discretized into visual tokens so images and video can be modeled with the same sequence machinery as language."
---
## Beliefs

Visual-Token Statism believes the decisive act of multimodal unification is quantization. Train an autoencoder with a learned codebook, compress every image or video clip into a grid of discrete codes, and the visual world becomes a language with its own vocabulary. From there, every tool built for text applies: next-token prediction, sampling, caching, prompting. Unify the currency and the realm unifies itself.

It sits at the very top, left of centre: Language-leaning because it turns pixels into a vocabulary for a language-style model, and Monolith because its purpose is to feed perception into one sequence model. Its paradigm level is Ultra-Orthodox: it bends vision to fit today's next-token recipe. Discrete visual tokenizers are well established as a research building block, but whether they are the final answer or a convenient stopgap remains openly contested.

## Arguments

- Vector-quantized autoencoders compress images into compact discrete codes that transformers can model efficiently.
- Discrete visual tokens allowed early text-to-image systems to generate images with a plain autoregressive transformer.
- Better tokenizers have repeatedly delivered large gains in generation quality, suggesting the tokenizer is a key lever.

## Critiques

- Quantization discards detail and introduces artifacts; continuous latents often reconstruct better at the same compression.
- Codebooks can suffer from collapse and poor utilization, making the vocabulary less expressive than it appears.
- Latent-prediction advocates argue that predicting discrete pixel codes still focuses the model on appearance rather than semantics.
