---
summary: "Holds that time is the neglected modality, and that models should learn from video natively rather than from still images and text."
---
## Beliefs

Video-Native Doctrine thinks the field has been studying photographs of a movie. Still images freeze the world at its least informative moment: no motion, no causation, no before and after. Video carries the dynamics, how objects persist, collide, fall and get used, and it does so at a scale no text corpus can match. A model that learns natively from video, with time as a first-class dimension rather than a stack of frames fed to an image encoder, will pick up physics, intent and causality that static data simply does not contain.

It sits deep on the World side and in the upper-middle band: one large spatiotemporal model, not a pipeline of per-frame detectors. Its paradigm level is revolutionary. It argues that the image-and-caption era was a detour and that the next foundation will be built on moving pictures.

## Arguments

- Masked video modeling and spatiotemporal pretraining learn motion-aware representations that transfer to action recognition and robotics better than image-only features.
- Video generation models produce scenes with increasingly consistent object permanence and motion, hinting at implicit world knowledge learned from pixels over time.
- Temporal prediction gives a natural self-supervised signal: the next moment is always available as a label.

## Critiques

- Video is enormously expensive to store, process and train on, and much of it is redundant across frames.
- Latent-prediction rivals argue that generating video pixels wastes capacity on appearance rather than dynamics.
- Visually plausible videos still violate physics in subtle ways, so "learns physics from video" remains contested.
