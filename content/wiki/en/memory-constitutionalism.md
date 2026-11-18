---
summary: "An agent is defined by what it remembers; persistent, structured long-term memory is the constitution that governs its behavior across sessions."
---
## Beliefs

Memory Constitutionalism holds that a model without durable memory is a brilliant amnesiac: every session starts from zero, every lesson is relearned, and nothing like identity can form. The fix is not a bigger context window but a written, governed store of facts, preferences, past episodes and self-notes that the agent reads at the start of every task and amends at the end. Like a constitution, this memory is explicit, inspectable, versioned and amendable by procedure, rather than smeared invisibly into weights.

On the chart it sits far toward Language and well down toward Harness. Memory is kept as text (notes, summaries, profiles), and it lives outside the model as part of the surrounding system. Its paradigm level is neutral: it is not a revolution, just the overdue observation that operating systems have disks for a reason.

## Arguments

- Hierarchical memory designs that page information between a small working context and an external store let agents run far beyond any fixed context length.
- Text memory is auditable: a user can read, correct or delete what the agent "believes" about them, which fine-tuned weights never allow.
- Reflection-style methods show that writing verbal lessons after failures and reading them back improves later attempts without any gradient update.

## Critiques

- Memory written by the model inherits the model's errors; a wrong note, once stored, can be retrieved and reinforced indefinitely.
- Deciding what to store, summarize and forget is itself an unsolved problem, and hand-tuned policies rarely transfer between tasks.
- Long-context advocates argue that as windows grow, most curated memory machinery becomes an expensive way to re-implement search.
