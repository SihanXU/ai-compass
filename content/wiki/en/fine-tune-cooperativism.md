---
summary: "Cheap, parameter-efficient fine-tuning lets every community adapt shared base models to its own needs, cooperatively and without frontier budgets."
---
## Beliefs

Fine-Tune Cooperativism believes the most useful models are not the biggest ones but the ones adapted to a particular language, domain, style or task. Thanks to low-rank adapters and quantized training, that adaptation no longer requires a cluster: a single GPU and a curated dataset of modest size can specialize a strong open base model. The cooperative ideal is a commons of small, shareable adapters built by many groups on a few shared bases, each serving its own members while others can reuse, merge and improve them.

It sits left of center, since its home turf is language-model adaptation, and in the lower Harness half, because it treats the base model as shared infrastructure and puts capability into a distributed layer of adapters and datasets around it. Its paradigm level is neutral: it is a practical economics of adaptation more than a new theory of intelligence.

## Arguments

- Low-rank adaptation matches full fine-tuning on many tasks while training only a small fraction of parameters, making adapters cheap to train, store and share.
- Quantized low-rank fine-tuning made it practical to adapt large models on a single GPU.
- Adapters are modular: one base model can serve many specialized variants, swapped at inference time.

## Critiques

- Fine-tuning mostly reshapes behavior and format; it adds far less new knowledge or reasoning ability than practitioners sometimes hope.
- Small fine-tunes can erode a base model's general abilities or safety behavior in ways that are hard to detect.
- Context-engineering advocates argue that retrieval and good prompting often achieve the same specialization with no training at all.
