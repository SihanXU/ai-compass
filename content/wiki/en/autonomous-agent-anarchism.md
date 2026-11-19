---
summary: "Give an agent a goal, tools and a loop, then step back; human approval steps are the bottleneck to remove."
---
## Beliefs

Autonomous-Agent Anarchism wants agents off the leash. The ideal workflow is a single sentence of intent, after which the agent plans, browses, writes and runs code, spawns subtasks and keeps going until the goal is met or the budget runs out. Every confirmation dialog is friction, every human-in-the-loop checkpoint a place where the agent idles. Reliability, in this view, comes from giving the agent better feedback from its environment, not from a human reading its every move.

It sits on the Language side, just above the middle: the agent is a language model wrapped in a reason-act loop, trusted to do most of the work itself, with tools, memory and a task queue in support. Its shade is only steady, since it runs on today's mainstream models; its boldness is a willingness to hand over the whole task, not just the tedious parts, to a system whose behaviour nobody fully predicts.

## Arguments

- Interleaving reasoning with actions and observations lets a language model correct its plan from real feedback, which is what makes long autonomous loops viable at all.
- Coding agents that run tests and read error messages can iterate many times faster than a human reviewing each step.
- Approval gates scale with human attention, which is the scarcest resource; autonomy is the only way agent throughput grows beyond it.

## Critiques

- Early fully autonomous agent loops became famous for wandering in circles, burning budget and declaring success on unfinished work.
- Without oversight, small errors compound over long horizons and actions with side effects, from deleted files to sent emails, may be irreversible.
- Giving untrusted inputs, such as web pages, direct influence over an unsupervised agent with real permissions is an open invitation to prompt injection.
