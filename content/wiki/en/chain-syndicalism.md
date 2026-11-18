---
summary: "Complex tasks should be broken into chains of small, specialized model calls, each doing one job and passing its output along."
---
## Beliefs

Chain Syndicalism organizes language-model work like a union of specialized trades. One call extracts, the next classifies, another drafts and a final one checks; each link has a narrow prompt, a clear input and a clear output. No single call is asked to do everything, and the chain as a whole accomplishes what a monolithic prompt would fumble. The syndicalist ideal is solidarity through division of labour: small, reliable workers coordinated by a fixed structure.

It sits near the Language edge (col 1) and well toward Harness (row 7): the intelligence lives partly in the decomposition, the glue code between calls. Its shade marks a somewhat established, pre-agentic school. Chains were the dominant way to build LLM applications before models became good at planning their own steps, and the newer agent camps sometimes treat them as rigid. Syndicalists reply that a predictable chain is exactly what production systems need.

## Arguments

- Decomposing a task into steps lets each step be prompted, tested and debugged separately, improving reliability and transparency.
- Intermediate outputs can be inspected and corrected, so failures are localized rather than buried inside one long generation.
- Different links can use different models, smaller and cheaper ones for easy steps, which reduces cost.

## Critiques

- Fixed chains are brittle when inputs do not fit the expected structure, and errors propagate down the chain.
- Models with strong internal reasoning can often do in one call what a chain does in five, making the scaffolding overhead.
- Autonomous-agent camps argue that hand-designed decompositions cap the system at the designer's foresight.
