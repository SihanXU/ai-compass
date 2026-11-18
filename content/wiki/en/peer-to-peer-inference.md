---
summary: "Large models can be served collaboratively across volunteers' consumer GPUs over the internet, with no data centre required."
---
## Beliefs

Peer-to-Peer Inference treats a large model like a file in a torrent swarm. Its layers are split across many volunteers' machines; a request hops from peer to peer, each running a slice of the network, until the output comes back. Anyone with a gaming GPU can contribute capacity, and anyone can run a model too big for their own hardware. Owning a data centre stops being the price of admission to large models.

It sits at the Harness extreme, since the model only exists as a distributed system of peers, routing tables and fault-tolerance logic, and near the middle of the Language-World axis, as the approach is indifferent to what the model is for. Its moderate shade reflects that it reorganises who runs inference, not what inference is.

## Arguments

- Systems that split transformer blocks across volunteer servers have run inference and parameter-efficient fine-tuning of models with tens of billions of parameters on consumer hardware at interactive speeds.
- Pooling idle consumer GPUs taps a huge, otherwise wasted reservoir of compute.
- Decentralised serving resists censorship, outages and the pricing power of a few providers.

## Critiques

- Internet latency and bandwidth between peers make it far slower and less predictable than a single well-connected cluster.
- Prompts and activations pass through strangers' machines, raising serious privacy and integrity concerns that are hard to fully solve.
- Volunteer networks are fragile: peers churn, incentives are weak, and quality of service depends on the goodwill of the crowd.
