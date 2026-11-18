---
summary: "Let data supervise itself; labels and captions are optional, and good visual features emerge from raw pixels alone."
---
## Beliefs

Self-Supervised Liberalism holds that the data already contains its own supervision. Mask part of an image and predict it, show two views and ask that they agree, distill a student from a slowly moving teacher: in each case the signal comes from the structure of the world, not from a human annotator or a caption scraped from the web. Freed from labels, a model can learn from far more data and pick up properties nobody thought to label, such as object boundaries and part correspondences.

It sits on the World side (col 8) at mid-height. The liberal label is about its laissez-faire attitude to supervision and its pluralism about method: masking, distillation and contrastive objectives all welcome, no single central loss decreed. Unlike its statist cousin above, it does not insist on one giant backbone ruling everything, and it is comfortable as one component inside larger systems. Its shade marks a modern, moderately revolutionary view.

## Arguments

- Self-supervised vision backbones produce features that transfer well to segmentation, depth and retrieval without task-specific labels.
- Removing the labelling bottleneck lets training scale with raw image and video data, which is far more abundant than curated annotations.
- Some properties, like emergent object segmentation in attention maps, appear without anyone asking for them, which supports letting the data speak.

## Critiques

- Caption-based and language-supervised camps argue that text provides semantic structure that pixels alone learn slowly and incompletely.
- Self-supervised recipes depend on many hand-chosen augmentations and tricks, which is supervision by another name.
- Benchmarks for these features still rely on labelled downstream tasks, so labels never fully leave the picture.
