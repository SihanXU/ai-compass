---
summary: "Large models can and should be trained across many loosely connected machines owned by many parties, not only inside centralized datacenters."
---
## Beliefs

Decentralized-Training Doctrine challenges the assumption that frontier-scale training requires a single datacenter with ultra-fast interconnect. Its adherents work on algorithms that tolerate slow, unreliable links between workers: infrequent synchronization, compressed gradients, local steps followed by occasional averaging, and fault tolerance for nodes that come and go. If these work at scale, training could be pooled from many independent clusters, labs or even volunteers, loosening the grip that compute concentration has on who gets to build large models.

It sits at the middle of the Language-World axis, since the techniques are modality-agnostic, and near the bottom of the Harness axis, because the substance is the distributed system that produces the model rather than any particular architecture. Its paradigm level is progressive: it is an infrastructure revolution as much as a research agenda.

## Arguments

- Low-communication training methods that synchronize only every many local steps have trained language models with far less bandwidth than standard data parallelism, with modest quality loss.
- Gradient compression research showed that most gradient communication can be removed without harming convergence.
- Volunteer computing has a long track record in science, suggesting that pooled, heterogeneous hardware can deliver serious compute.

## Critiques

- Decentralized runs still trail centralized ones in scale and efficiency, and the gap may widen as frontier training grows.
- Heterogeneous, untrusted participants raise problems of verification, poisoning and coordination that datacenters never face.
- Even decentralized training needs organizers, data and capital, so power may concentrate again at a different layer.
