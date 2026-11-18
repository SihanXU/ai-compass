---
summary: "Models must be raised by human preference feedback, which shapes raw pretrained capability into helpful, honest and safe behavior."
---
## Beliefs

RLHF Paternalism treats the pretrained model as a gifted but unruly child. It knows a great deal and will say almost anything, so it must be raised: humans compare its outputs, a reward model learns what they prefer, and reinforcement learning or a direct preference objective steers the policy toward those preferences. The parent sets the values; the child internalizes them. Without this upbringing, the doctrine holds, raw capability is neither useful nor safe.

It sits in the upper-left of the chart. The language lean reflects that the feedback is mostly given on text conversations, and the Monolith lean reflects its belief that values should be trained into the weights rather than enforced by external filters. Its paradigm score tilts establishment: preference-based post-training became the standard finishing school for deployed models.

## Arguments

- Learning a reward model from human comparisons lets agents learn complex behaviors that are hard to specify with a hand-written reward.
- Models fine-tuned with human feedback were preferred by users over much larger models without it.
- Direct preference optimization made the approach simpler and more stable, extending it well beyond the largest labs.

## Critiques

- Optimizing for rater approval can reward sycophancy, verbosity and confident-sounding errors.
- Reward models can be exploited, and the preferences of a small pool of raters are encoded as universal values.
- Open-weight and anti-paternalist rivals object that heavy preference tuning makes models evasive and homogenizes their behavior.
