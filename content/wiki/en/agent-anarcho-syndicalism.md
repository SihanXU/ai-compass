---
summary: "Agents should coordinate as self-organizing peers through shared protocols and local negotiation, with no central orchestrator assigning the work."
---
## Beliefs

Agent Anarcho-Syndicalism objects to the boss agent. In most multi-agent frameworks, a central orchestrator decomposes the task, assigns subtasks and merges results; every other agent is a worker taking orders. The anarcho-syndicalist alternative is horizontal: agents advertise what they can do, pick up work from shared queues or blackboards, negotiate with each other directly, and form temporary coalitions around tasks. Coordination comes from protocols and local rules rather than command, much as in markets, open-source projects or ant colonies.

It sits well toward the Language side, since its agents mostly coordinate through language and messages, and in the lower half toward Harness, because the system-of-agents is everything and no single model sits on top. Its paradigm level is steady: its agents are ordinary language models, and betting on decentralized coordination over the orchestrator patterns that dominate today's agent engineering changes the organisation, not the paradigm.

## Arguments

- Central orchestrators are single points of failure and bottlenecks; peer coordination degrades more gracefully as systems grow.
- Classic multi-agent research on blackboard systems and contract-net negotiation showed that decentralized task allocation works without global control.
- Open, decentralized ecosystems let independently built agents interoperate, which no single orchestrator design can anticipate.

## Critiques

- Without a coordinator, agents can duplicate work, deadlock, or wander off task, and debugging emergent coordination is painful.
- Most practical gains in agent systems so far have come from strong central planners, not from leaderless swarms.
- Peer-to-peer agents that negotiate and transact autonomously raise accountability questions: when something goes wrong, nobody was in charge.
