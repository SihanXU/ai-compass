---
summary: "Holds that code is the best language of reasoning, so models should think by writing and executing programs."
---
## Beliefs

Code-as-Thought argues that natural language is a fine medium for chatting and a poor one for computing. Ask a model to multiply large numbers or track a dozen variables in prose and it will drift; ask it to write a short program and run it, and the interpreter does the arithmetic without complaint. Code is precise, compositional, executable and checkable. It forces the model to make every step explicit, and when it is wrong, the error message says so. Reasoning should therefore be expressed as programs wherever possible, with natural language reserved for the parts that genuinely resist formalization.

It sits left of center, still within the language family since code is a language, and in the middle band: a single model, extended by one very important tool, the interpreter. Its paradigm level is neutral. Training on code and program-aided reasoning are now mainstream, and the ideology's claim is mostly about how far that should go.

## Arguments

- Program-aided reasoning, where the model writes code and an interpreter computes the answer, improves accuracy on arithmetic and symbolic tasks over chain-of-thought in prose.
- Code is verifiable: unit tests and execution give immediate, objective feedback, which also makes it an ideal domain for reinforcement learning.
- Training on code appears to help general structured reasoning, not only programming.

## Critiques

- Much reasoning, such as moral judgment, reading intent or weighing evidence, does not reduce to programs.
- Execution sandboxes add latency, security concerns and infrastructure, pushing the approach toward the harness side it claims to avoid.
- Formalist rivals note that running code is not proof; a program can pass tests and still be wrong.
