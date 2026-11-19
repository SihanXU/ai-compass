---
summary: "Modalities must be fused from the very first layer and the very first token of pretraining, never grafted on afterward."
---
## Beliefs

Native-Fusion Centralism objects to the most common way of building multimodal models: take a finished language model, attach a pretrained vision encoder through a small adapter, and fine-tune. To this doctrine that is an arranged marriage. True multimodality, it argues, requires training from scratch on mixed data so that every layer learns to treat image and text as one interleaved signal. Fusion is not a feature you add; it is a property of the model's upbringing.

It sits near the top of the chart, just right of center. The Monolith stance is strict: no frozen encoders, no adapters, no separate towers. The slight lean toward World reflects that it takes perception as seriously as language, refusing to let vision be a second-class input. Its paradigm level is Orthodox: native training is now how the frontier builds its flagship models, even though many open models still use the cheap adapter recipe.

## Arguments

- Natively fused models can generate as well as understand images, something adapter-based models usually cannot do.
- Joint pretraining avoids the representational mismatch between a frozen encoder's features and a language model's expectations.
- Early mixed-modal foundation models have shown that a single token stream across text and images can be trained stably at scale.

## Critiques

- Training from scratch discards the enormous investment already sunk into strong unimodal models.
- Mixed-modal pretraining is notoriously unstable and sensitive to data ratios.
- Adapter-based rivals often achieve competitive understanding benchmarks at a fraction of the cost.
