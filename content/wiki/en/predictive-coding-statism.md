---
summary: "Holds that intelligence is fundamentally prediction of incoming sensory signals, with learning driven by minimizing prediction error."
---
## Beliefs

Predictive-Coding Statism takes a theory from computational neuroscience and makes it state policy: the brain, and therefore any intelligent machine, is a hierarchy of predictors. Higher levels send predictions down; lower levels send back only the errors. Perception is the model's best guess about the causes of its senses, and learning is the slow reduction of surprise. Next-token prediction in language models is, from this vantage, a narrow special case of a much older and more general principle.

It sits well over on the World side, since the signals being predicted are sensory streams rather than text, and near the Monolith end because it seeks one unifying objective for all of cognition. Its paradigm level is Revolutionary: it would replace feedforward stacks trained by backpropagation with recurrent, error-passing hierarchies, and it treats action itself as just another way to reduce prediction error.

## Arguments

- Prediction error is a self-supervised signal available everywhere, at every timestep, for free; no labels or rewards are needed.
- The framework accounts for a range of neuroscience findings, such as context effects in visual cortex, which gives it explanatory reach beyond benchmark scores.
- Video-prediction networks built on predictive-coding ideas learn useful representations of motion and objects from raw frames.

## Critiques

- Latent-prediction rivals argue that predicting raw sensory detail wastes capacity on unpredictable noise; predict in representation space instead.
- Large-scale predictive-coding networks have not matched mainstream architectures on standard benchmarks, so the engineering case lags the theory.
- Stretched to explain everything, including action and motivation, the theory risks becoming hard to falsify.
