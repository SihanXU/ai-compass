---
summary: "Treats a pretrained language model as the backbone of every system, with vision, audio and tools attached as interchangeable plugins."
---
## Beliefs

Neoliberal Linguism has made peace with the market. The language model won; everything else is a supplier. Need vision? Bolt a pretrained image encoder onto the LM through a projection layer and tune on instruction data. Need speech, retrieval, a calculator? Plug them in. The backbone stays sovereign, the modules compete to serve it, and nobody needs to pretrain a new giant from scratch. It is efficient, modular, and deeply pragmatic.

It sits at the far Language edge and in the lower half, toward Harness: one central model, but one that happily imports components. Its paradigm level is Ultra-Orthodox. This is the default recipe behind a great many open vision-language models and tool-augmented assistants, which makes it less an ideology than the prevailing economic consensus, complete with critics on both flanks.

## Arguments

- Connecting a frozen or lightly tuned vision encoder to a language model with a small adapter yields capable multimodal assistants at a fraction of the cost of joint pretraining.
- The LM's reasoning, world knowledge and instruction following transfer to new modalities almost for free once inputs are mapped into its embedding space.
- Modularity lets each component be upgraded independently as better encoders or language models are released.

## Critiques

- Native-fusion camps argue that late-attached encoders produce shallow perception: the model sees through a narrow straw of projected tokens and misses fine detail.
- Plugins inherit the language model's blind spots; if the backbone cannot represent something in words, the adapter cannot fix that.
- Harness advocates say that if everything is a plugin anyway, the orchestration layer, not the LM, is the real backbone.
