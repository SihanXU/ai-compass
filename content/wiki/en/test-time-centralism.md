---
summary: "Spending more compute at inference, through sampling, search and longer thinking, is a scaling axis as important as pretraining."
---
## Beliefs

Test-Time Centralism argues that the field spent years scaling only one side of the ledger. Pretraining compute grew by orders of magnitude, while each answer was still produced in a single forward pass per token with no second thoughts. The doctrine moves the budget to inference: sample many candidates and vote, search over reasoning trees, verify and revise, or simply let the model think longer. A smaller model that thinks harder can beat a bigger one that answers at once.

It sits in the upper band, slightly left of center. The language lean reflects that most test-time methods operate over text reasoning traces. The Monolith lean is real but softer than its neighbors': inference-time search sometimes uses verifiers and simple scaffolds, yet the core remains one model allotted more compute. Its paradigm score is mildly revolutionary: inference scaling became a mainstream axis only recently.

## Arguments

- Sampling multiple reasoning paths and taking the majority answer consistently improves accuracy over a single greedy chain.
- Tree-structured search over intermediate thoughts solves planning puzzles that single-pass generation fails on.
- Compute-optimal analyses show that allocating test-time compute adaptively can rival scaling model parameters substantially.

## Critiques

- Inference compute is paid on every query, so the approach shifts cost onto users and deployment.
- Gains depend on having a reliable verifier or a task where consistency signals correctness.
- Efficiency-minded rivals argue that on-device and latency-sensitive applications cannot afford to think for minutes.
