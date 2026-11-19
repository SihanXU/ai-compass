---
summary: "Pretraining is where every real capability comes from; post-training merely teaches the model manners and output format."
---
## Beliefs

Pretraining Maximalism draws a sharp line between ability and etiquette. Knowledge, reasoning skill and linguistic competence are forged in the long, expensive pretraining run over trillions of tokens. Instruction tuning, preference optimization and the rest of post-training only select which of those latent behaviors the model shows to users. If a post-trained model can do something, the base model could already do it; you just had to ask the right way.

It sits near the top-left of the chart, firmly language-first and Monolith: capability is a property of the weights, produced by one massive training run. Its paradigm level is Orthodox, reflecting faith in the Transformer-plus-scale recipe that defined the first large-model era. It has been challenged since by reinforcement learning that appears to teach genuinely new reasoning behavior.

## Arguments

- Small, carefully curated instruction sets of around a thousand examples can align a strong base model surprisingly well, implying the abilities were already there.
- Few-shot prompting of base models reveals translation, arithmetic and coding skills with no task-specific training.
- Post-training is known to sometimes reduce calibration and diversity, suggesting it reshapes rather than adds.

## Critiques

- Reinforcement learning on verifiable rewards has produced reasoning improvements that are hard to elicit from the base model by prompting alone.
- The boundary between "eliciting" and "teaching" is blurry enough to make the claim nearly unfalsifiable.
- Harness-side rivals argue capability also lives in tools and context, not only in the base weights.
