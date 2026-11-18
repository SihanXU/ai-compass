---
summary: "Believes vision models should learn from raw unlabeled pixels at scale, with human labels and captions as optional extras."
---
## Beliefs

Self-Supervised Vision Statism holds that pixels themselves contain enough signal to learn rich visual understanding, if only the state invests in big enough models and datasets. Masking patches and reconstructing them, matching augmented views of the same image, distilling a student into a teacher: these pretext tasks turn the world's unlabeled images into a free curriculum. Labels are expensive, biased toward what annotators thought to name, and capped by human patience. Captions are better but still filter vision through language.

It sits right of center, firmly on the perception side, and up toward the Monolith because its program is one large backbone pretrained centrally and handed out to everyone. The "statism" is the scale: not a cottage industry of hand-tuned features but a national program of GPU-hours and curated image collections. Its paradigm level is modern but not radical; it is the established way to pretrain vision when you do not want to depend on text.

## Arguments

- Masked image modeling and self-distillation produce features that rival or beat supervised pretraining on many transfer tasks without a single label.
- Self-supervised features show emergent structure, such as attention maps that segment objects, suggesting the model learns about objects rather than label shortcuts.
- Removing labels removes the ceiling: usable data grows with the number of images, not the number of annotators.

## Critiques

- Image-text camps argue that language supervision gives semantics for free and generalizes zero-shot, which pure pixel objectives struggle to match.
- Pretext tasks smuggle in human priors through augmentation choices and masking ratios, so "no human input" is an overstatement.
- Data curation at scale quietly becomes the new labeling, with its own biases.
