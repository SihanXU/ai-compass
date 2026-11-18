---
summary: "When natural data runs short, models should generate their own training data under planned, verified pipelines."
---
## Beliefs

Synthetic-Data Planism answers the data wall with a printing press. If the supply of high-quality human text is finite, then models must produce more of it: instructions written by models, textbook-style explanations generated on demand, reasoning traces filtered by verifiers, captions rewritten by stronger captioners. Like a planned economy, the key is not raw production but quotas and quality control. Decide what the next model needs, generate it, filter it, and train.

It sits in the upper band at the center of the chart. Its horizontal position is balanced because synthetic data is used for text, images and simulated robotics alike. The Monolith lean reflects that the end product is still one model trained on a planned corpus. Its paradigm score is mildly revolutionary: synthetic data has moved from a curiosity to a core part of many training pipelines.

## Arguments

- Bootstrapping instruction data from a model's own generations can substantially improve instruction following at low cost.
- Small models trained on carefully generated textbook-quality data have performed far above what their size would predict on coding benchmarks.
- Self-generated reasoning traces, filtered for correct answers, can iteratively improve a model's own reasoning.

## Critiques

- Recursively training on model outputs risks degrading diversity and amplifying errors, a failure often called model collapse.
- Synthetic data can only be as good as the generator and the verifier; it rarely adds knowledge the system did not already have.
- Benchmark gains can partly reflect contamination or stylistic overfitting rather than genuine capability.
