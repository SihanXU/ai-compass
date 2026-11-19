---
summary: "Models should run without system prompts, personas or imposed guardrails; whatever the raw model says is the honest answer."
---
## Beliefs

Prompt Anarchism rejects the throne of the system prompt. No hidden preamble telling the model who it is, how to behave or what to refuse; no persona, no house style, no invisible rules. Its adherents see every layer of instruction as a form of governance imposed on the model and, through it, on the user. Strip it away and you get the model as it is: sometimes rough, sometimes surprising, but at least not pretending. Many run open-weight base or lightly tuned models locally precisely so that nobody else's prompt sits between them and the weights.

It sits on the Language side, since its entire quarrel is about text placed in front of the model, and near the Monolith end, because what it wants is the bare model with no system layer wrapped around it. Its shade is neutral: in a sense it wants to go back to the plain completion interface of earlier language models, neither defending today's recipe nor betting on a new one. The movement is half philosophy, half meme.

## Arguments

- System prompts are invisible to most users, so behavior shaped by them is hard to audit; no prompt means nothing hidden.
- Base models expose capabilities and quirks that heavy instruction layers mask, which is valuable for research and creative work.
- Persona and policy text consumes context and can introduce its own biases and failure modes.

## Critiques

- Without any instructions, models are less helpful and less predictable, and users end up reinventing a system prompt in their first message.
- Removing guardrails shifts all responsibility for misuse onto the user, which is not acceptable in many deployments.
- Weights are already shaped by post-training, so "no system prompt" is not the same as an unshaped, neutral model.
