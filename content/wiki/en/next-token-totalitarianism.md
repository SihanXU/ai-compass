---
summary: "Predicting the next token is not a proxy for intelligence; it is the whole of intelligence, and every other objective is a footnote."
---
## Beliefs

Next-Token Totalitarianism takes the humble language-modeling loss and declares it sovereign. To predict the next token of a physics textbook well, a model must in effect learn physics; to predict the next line of a negotiation, it must model minds. Compression is understanding, and cross-entropy is the only honest exam. Planning, reasoning and world knowledge are all treated as things the loss will eventually extract, given enough data.

It lives at the very top of the chart, one step right of the corner: deeply linguistic, maximally monolithic. Its paradigm score leans old-guard, which says something about how fast the field moves. A belief that once sounded audacious is now the default that everyone else has to argue against first.

## Arguments

- A single self-supervised objective on raw text produced in-context learning, code synthesis and multilingual transfer without any task-specific design.
- The prediction-as-compression view gives a clean account of why lower loss tends to track better downstream capability.
- The same objective extends to any discretized data, so the doctrine generalizes cheaply to new modalities.

## Critiques

- Predicting the next token of human text imitates the average writer; rivals argue it can plateau at the training distribution rather than surpass it.
- Latent-prediction advocates say forecasting every surface detail wastes capacity on noise instead of abstract structure.
- The rise of reinforcement learning and test-time search suggests the loss alone is not the whole story, even inside the monolith camp.
