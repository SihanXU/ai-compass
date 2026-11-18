---
summary: "Holds that capability is organized and unlocked by instruction tuning, so every task should be cast as a natural-language instruction."
---
## Beliefs

Instruction Corporatism believes in a well-ordered society of tasks. Translation, summarization, classification, code repair: each is a guild, and each guild is represented by instructions written in plain language. Pretraining supplies raw capacity, but it is instruction tuning that turns a text predictor into something that does what it is asked. Collect thousands of tasks, phrase them as instructions, mix them carefully, and a single model learns to generalize to instructions it has never seen.

It sits left of center on the Language side and in the middle band of the chart: one model, but one whose behavior is shaped by a large, curated system of task formats, a structure halfway between pure scale and engineered pipeline. Its paradigm level is neutral. It was once the new idea that made zero-shot prompting practical; today it is ordinary infrastructure in nearly every post-training recipe.

## Arguments

- Fine-tuning on a broad mixture of tasks phrased as instructions improves zero-shot performance on held-out tasks, a result replicated across many model families.
- Instructions are a universal interface: any task a person can describe can be added without changing the architecture.
- Models can generate their own instruction data, letting the corporatist system expand cheaply.

## Critiques

- Preference-learning camps argue instruction data teaches format more than judgment, and that feedback-based training matters more for real helpfulness.
- Instruction mixtures inherit the biases of whoever chose and wrote the tasks; benchmark contamination is a constant worry.
- Reasoning-focused rivals say that following instructions is not the same as solving hard problems, which needs search or long deliberation.
