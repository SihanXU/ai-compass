---
summary: "Holds that one general-purpose learned representation, trained once at scale, should serve every downstream task."
---
## Beliefs

Representation Centralism believes the real product of deep learning is not a model that does a task but an embedding space that makes every task easy. Train one excellent encoder, freeze it, and let linear probes, small heads and adapters do the rest. Classification, retrieval, segmentation, policy learning: all are just readouts from the same central bank of features. Task-specific training is seen as wasteful duplication, like every province minting its own currency.

It sits slightly right of center and near the Monolith end: perceptual rather than purely linguistic, because its flagship artifacts are image and video encoders, and monolithic because the whole point is a single backbone. Its paradigm level is moderately progressive. It does not want to abolish the current order, only to make sure every downstream system pays taxes to one representation.

## Arguments

- Frozen features from large self-supervised or contrastive encoders transfer to many tasks with only a linear probe, which is strong evidence that the representation carries most of the knowledge.
- One shared backbone amortizes the expensive part of learning; downstream teams can iterate on cheap heads instead of retraining from scratch.
- Good embedding spaces enable retrieval, clustering and zero-shot transfer for free, uses no single-task model would have anticipated.

## Critiques

- End-to-end camps note that fine-tuning or training the whole stack usually still beats frozen features when the task really matters.
- "General-purpose" is defined by the benchmark suite chosen; a representation can look universal while missing fine geometry, small text or temporal dynamics.
- Harness advocates point out that what downstream users increasingly want is an agent that acts, not a vector.
