---
summary: "Agents should improve themselves by rewriting their own prompts, tools, memory and workflows, turning harness design into something the agent does."
---
## Beliefs

Self-Improving Agentism observes that the harness around a model (prompts, tool definitions, retrieval settings, control flow) is mostly code and text, and that models are now competent at writing code and text. So why should humans keep hand-tuning it? Let the agent inspect its own failures, propose changes to its scaffolding, test them against tasks and keep what works. Unlike training-level self-improvement, this happens without touching the weights, which makes it cheap, fast and reversible.

It sits on the Language side because the artifacts being improved are prompts and programs, and in the lower, Harness half because the object of improvement is the system around the model. Its paradigm level is neutral: it hands today's models a job that most other harness-side ideologies treat as human craft, without challenging the mainstream recipe itself.

## Arguments

- Methods that search over agent designs written in code, using a model as the designer, have discovered scaffolds that outperform hand-designed baselines on several benchmarks.
- Verbal self-reflection that stores lessons from failed attempts improves later performance without gradient updates.
- Prompt and pipeline optimizers that compile declarative programs into tuned prompts show that much hand-engineering can be automated.

## Critiques

- Self-modification needs a reliable evaluator; without one, agents optimize for the benchmark they can see and drift elsewhere.
- Gains often saturate quickly, since a harness can only extract what the underlying model can do.
- An agent that rewrites its own controls raises obvious oversight concerns, especially if it can edit its own safety checks.
