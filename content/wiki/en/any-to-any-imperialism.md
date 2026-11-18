---
summary: "One model should take any modality as input and produce any modality as output, annexing every specialist system along the way."
---
## Beliefs

Any-to-Any Imperialism looks at the zoo of specialist models (a captioner here, a text-to-speech system there, an image generator somewhere else) and sees provinces waiting to be unified. Its goal is a single network that maps any combination of text, image, audio and video to any other combination. Every specialist that survives is, in this view, just a capability the empire has not yet absorbed.

It sits at the top center of the chart. The Monolith position reflects its expansionism: capabilities should be added by training, not by bolting on another model. Its horizontal position is balanced, because it is genuinely modality-agnostic, with no special loyalty to language or to perception. Its paradigm score leans revolutionary: few production systems have fully achieved it, and the attempt itself forces new architectures.

## Arguments

- Cross-modal transfer is strongest when modalities share weights; a model that both hears and speaks can learn prosody from both directions.
- Removing hand-offs between specialist models removes compounding errors and latency at every boundary.
- Research systems spanning vision, language, audio and action in one autoregressive model show the approach can work at meaningful scale.

## Critiques

- Jack-of-all-modalities models often trail dedicated specialists on any single task.
- Training mixtures across many modalities are hard to balance, and one modality can quietly dominate or degrade the others.
- Harness advocates point out that routing to specialist models is cheaper, easier to update and often good enough.
