---
summary: "Models should be federations of specialized expert subnetworks, with a router activating only the few each input needs."
---
## Beliefs

Mixture-of-Experts Federalism believes in specialization under a shared constitution. Instead of every parameter working on every token, a learned router sends each token to a small number of expert subnetworks. The model can then hold far more total parameters, and far more knowledge, while each forward pass costs only a fraction of that. Experts are the states; the router is the federal government; load-balancing losses are the laws that stop any one state from hogging all the traffic.

It sits at the horizontal center-left (col 5) and toward Harness (row 7), an interesting position: an MoE is trained end to end as one model, yet internally it is a federation of parts with routing, the kind of modular structure that harness thinking prizes. Its neutral shade reflects that sparse experts are now mainstream at the frontier, a decades-old idea that found its moment when scaling made compute efficiency urgent.

## Arguments

- Sparse activation decouples total parameter count from per-token compute, allowing larger capacity at similar training and inference cost.
- Experts often specialize in recognizable ways, by domain, language or token type, which supports the federal division of labour.
- Sparse expert models have reached strong quality-per-compute trade-offs compared with dense models of similar active size.

## Critiques

- All experts must still be stored in memory, which makes MoE models awkward for local and edge deployment.
- Routing introduces training instabilities, load imbalance and communication overhead across devices.
- Expert specialization is often less interpretable than the federal metaphor suggests, blurring the case for modularity.
