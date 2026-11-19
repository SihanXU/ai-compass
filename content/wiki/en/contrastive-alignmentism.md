---
summary: "Holds that every modality should be mapped into one shared embedding space, pulled together by contrastive learning on paired data."
---
## Beliefs

Contrastive Alignmentism is the diplomat of the chart. Text, images, audio, depth, motion: each speaks its own language, but all can be made to meet in one common embedding space. The method is elegant: take naturally paired data, such as an image and its alt-text, pull matching pairs together, push mismatched pairs apart, and repeat over a very large batch. The result is a space where "dog," a photo of a dog and the sound of barking land near each other, and zero-shot recognition becomes a nearest-neighbor lookup.

It sits just right of the horizontal centre, neither language-first nor vision-first, which is the whole point: it treats modalities as equals to be aligned. Vertically it is in the upper-middle band, a single shared space rather than a toolchain. Its paradigm level is neutral. Contrastive image-text pretraining was a breakthrough and is now standard equipment, the encoder underneath many generative and multimodal systems.

## Arguments

- Contrastive image-text models trained on large web-scraped pairs achieve strong zero-shot classification across many datasets without task-specific labels.
- One shared space makes cross-modal retrieval, filtering and evaluation simple and cheap.
- Aligning several modalities to images can bind modalities that were never directly paired with each other.

## Critiques

- Contrastive embeddings are known to behave like bags of concepts, struggling with word order, counting, negation and spatial relations.
- Generative camps argue that alignment is not understanding: a shared space retrieves well but cannot produce, explain or reason step by step.
- Web-scale pairs import noisy and biased captions directly into the geometry of the space.
