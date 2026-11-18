---
summary: "Everything that can be known can be serialized into one token stream, and a single giant model should read all of it."
---
## Beliefs

Logos Absolutism holds that the universe is, for all practical purposes, a very long document. Text, code, images, audio and actions are just different encodings of one underlying sequence, and the right response is a single end-to-end model trained to read and continue that sequence. No routers, no specialist modules, no glue code: one stream in, one stream out.

It sits in the extreme top-left corner of the chart. "Language" here is less about English than about the sequence itself as the substrate of thought, and "Monolith" is taken literally: if a capability lives outside the weights, it does not really count. Its paradigm score is dead neutral, because it is at once the founding creed of the current era and a fairly old idea dressed in new compute.

## Arguments

- Autoregressive sequence models already absorbed translation, summarization, coding and question answering into one objective; every modality serialized since has followed the same path.
- A single stream makes transfer automatic: knowledge learned in one encoding is available to all the others without hand-designed interfaces.
- Engineering is simpler. One tokenizer, one loss, one training run and one serving stack scale far better than a federation of systems.

## Critiques

- Not everything serializes gracefully; continuous control, high-resolution video and long-horizon physical interaction strain a flat token stream.
- "One model reads everything" quietly assumes the data already exists in text-like form, which is false for most of the physical world.
- Rivals from the Harness side note that the strongest deployed systems still lean heavily on tools, retrieval and scaffolding outside the weights.
