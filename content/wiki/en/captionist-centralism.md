---
summary: "Every image should first be converted into a detailed caption, because language is the universal interface between perception and reasoning."
---
## Beliefs

Captionist Centralism solves multimodality by translation. Whatever arrives through the eyes is immediately written up in prose: a dense caption, a list of objects, a description of the scene. From that moment on, the language model takes over and reasons in its native tongue. The doctrine also runs in reverse: train image generators on rich, rewritten captions and they follow prompts far better. Captions are the bureaucracy through which all perception must pass, and good bureaucracy makes everything work.

It sits at the far Language edge of the chart, just above the middle. The language lean is obvious: text is the lingua franca and the place where reasoning happens. The slight Monolith lean comes from its ambition to fold perception into one language-centric model and data pipeline. Its paradigm level is orthodox, because recaptioning and caption-based reasoning are now routine engineering rather than radical bets.

## Arguments

- Composing vision models and language models through captions enables zero-shot multimodal reasoning without any joint training.
- Training text-to-image models on detailed synthetic captions substantially improves prompt following.
- Captions are inspectable and editable, which makes multimodal systems easier to debug and audit.

## Critiques

- A caption is a lossy bottleneck; spatial relations, fine textures and counts are routinely dropped.
- Errors in captioning propagate silently into every downstream reasoning step.
- Native-fusion and vision-first rivals argue that forcing perception through words caps the system at what language can describe.
