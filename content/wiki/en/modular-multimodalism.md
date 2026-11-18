---
summary: "Multimodal systems should be assembled from separately pretrained encoders and a language model, joined by lightweight adapters."
---
## Beliefs

Modular Multimodalism builds multimodal models the way one builds a workstation: buy the best components and connect them. A strong pretrained vision encoder, a strong pretrained language model, and a small bridge between them, whether a projection layer, a query transformer or cross-attention inserted into frozen layers. Each part keeps what it learned from its own massive pretraining, and the expensive joint training is limited to the connector and some instruction tuning.

It sits at the horizontal center (col 6) and toward Harness (row 7): the system spans vision and language evenly, and it is defined by its seams. Its neutral shade reflects that this recipe was, for a period, the standard way to build vision-language assistants, and it remains popular in open research for its efficiency. Its rivals above, the native and early-fusion camps, argue that seams leave perception second-class; modularists answer that seams also let you upgrade one part without retraining everything.

## Arguments

- Reusing frozen pretrained encoders and language models makes multimodal training dramatically cheaper than training from scratch.
- Components can be swapped independently, so a better vision encoder or a newer language model can be adopted quickly.
- A small connector trained on modest paired data, plus visual instruction tuning, has been enough to produce capable vision-language assistants.

## Critiques

- Fusion camps argue that bolting vision onto a language model compresses images into a few tokens and loses fine-grained detail.
- Modular models tend to generate only text, so they struggle to unify understanding with image generation.
- Mismatched pretraining objectives between encoders and the language model can create hard-to-fix grounding errors.
