---
summary: "Modalities should be merged at the input layer and processed together by one network, rather than combined late from separate encoders."
---
## Beliefs

Early-Fusion Statism is a doctrine about where modalities meet. Late fusion keeps separate towers for vision and language and merges their outputs near the top; mid fusion uses cross-attention adapters partway through. Early fusion insists the meeting happens at the very first layer: image patches and text tokens enter the same transformer side by side and share every parameter from there on. The state, in this metaphor, refuses to let any modality run its own province.

It sits near the top of the chart, in the centre column. The Monolith lean follows from its preference for one shared network over a federation of encoders. Its horizontal position is balanced: every modality goes into one token stream, even though most early-fusion models still borrow the decoder-only language-model template. Its paradigm level is steady: early fusion is gaining ground as a natural extension of the mainstream recipe, while adapter-based late fusion still dominates in practice.

## Arguments

- Sharing parameters from the first layer allows fine-grained cross-modal interactions that late fusion cannot capture.
- Feeding raw image patches directly into the decoder removes the separate vision encoder and simplifies the architecture.
- Early-fusion models handle arbitrarily interleaved image and text input naturally, including generating either.

## Critiques

- Early fusion forgoes powerful pretrained vision encoders and must learn visual features from scratch.
- Sequence lengths grow quickly when raw patches are inserted, raising compute costs.
- Modular rivals argue late fusion is more data-efficient and lets each modality be upgraded independently.
