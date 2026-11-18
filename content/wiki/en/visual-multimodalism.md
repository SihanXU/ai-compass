---
summary: "Aims at general multimodal intelligence but builds it on vision, treating text, documents and interfaces as things to be seen."
---
## Beliefs

Visual Multimodalism wants the same destination as its language-first counterpart, a model that handles every modality, but picks a different road: vision is the means. Why tokenize a web page when you can look at it? Why parse a PDF when the rendered page already contains layout, figures and text? Screenshots, charts, handwriting and even plain text can all be rendered as pixels, and a strong visual model can learn to read them along with everything else. Language becomes one of many things that appear in images.

It sits just right of center, the first step onto the World side, and in the upper-middle band: one model with a visual core reaching out to every modality. Its paradigm level is neutral to progressive. It challenges the assumption that text is the natural common currency, while still sharing the mainstream's faith in one large, general model.

## Arguments

- Pretraining on screenshots and rendered pages lets one visual model handle documents, charts, user interfaces and natural images without separate text pipelines.
- Visual in-context learning, where a model completes image prompts with image answers, shows that vision alone can support task generalization.
- Pixels avoid tokenizer artifacts and handle any script, layout or symbol that can be displayed.

## Critiques

- Language-first camps note that reading text from pixels is far less compute-efficient than reading text tokens.
- Abstract reasoning still seems to lean on language; visual-only models trail on knowledge-heavy and multi-step tasks.
- Its mirror image, Multimodal Visualism, argues vision should be the goal, not just the vehicle for other modalities.
