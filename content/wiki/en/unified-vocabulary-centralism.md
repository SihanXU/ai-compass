---
summary: "Images, audio and actions should be discretized into one shared vocabulary so a single sequence model can handle all of them."
---
## Beliefs

Unified-Vocabulary Centralism believes the real bottleneck in multimodal AI is not architecture but bookkeeping. Give every modality a codebook, append those codes to the text vocabulary, and suddenly an image patch, a snippet of audio and a robot joint command are all just token IDs in one embedding table. The transformer does not need to know which is which; the shared vocabulary is the constitution, and every modality must register under it.

It sits at the top of the chart, slightly left of center. The Monolith position is the whole point: one vocabulary means one model, one loss, one decoding loop. The mild language lean reflects that the template is borrowed from language modeling, even when most tokens are no longer words. Its paradigm score is neutral; the idea is mainstream in research but still contested in production systems.

## Arguments

- A shared vocabulary lets one autoregressive model both read and emit any modality, enabling generation and understanding in the same network.
- Generalist agents trained on serialized text, images and control actions have shown a single set of weights can span very different tasks.
- Discrete tokens inherit the full tooling of language models: sampling, caching, in-context prompting and scaling recipes.

## Critiques

- Quantization loses information; discrete codebooks blur fine visual detail and struggle with continuous control.
- Tokenizer design for each modality becomes a hidden source of hand engineering, which the doctrine claimed to abolish.
- Modular rivals argue that specialized encoders with continuous embeddings simply perform better per unit of compute.
