---
summary: "Web documents that interleave images and text are the new textbooks, and multimodal models should be pretrained on them at scale."
---
## Beliefs

Interleaved Statism argues that image-caption pairs taught models to label pictures, but not to think with them. Real knowledge on the web comes in documents where diagrams sit next to explanations, photos punctuate articles and screenshots illustrate tutorials. Training on these interleaved sequences teaches a model to carry context across images and paragraphs, to follow visual references and to learn new visual tasks from a few examples in context. The state's job is to collect, filter and publish these textbooks at web scale.

It sits in the upper band near the center, slightly toward language: the documents are still primarily text, and the doctrine's ambition is to extend language-model pretraining to the visual web. The Monolith lean comes from its goal of one model learning from one massive interleaved corpus. Its paradigm level is orthodox; interleaved pretraining is now standard mainstream practice, though debates continue about how much it adds.

## Arguments

- Visual language models trained on interleaved web data acquired strong few-shot multimodal learning, adapting to new tasks from a handful of examples.
- Open web-scale interleaved datasets made this kind of pretraining reproducible beyond large labs.
- Interleaved documents provide natural multi-image context, which pair datasets cannot teach.

## Critiques

- Web documents are noisy; images are often decorative or only loosely related to the surrounding text.
- Filtering at scale is expensive and can silently import the biases of the filtering models.
- Rivals note that interleaved web data still underrepresents video, embodiment and anything not written up online.
