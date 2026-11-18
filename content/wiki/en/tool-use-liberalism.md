---
summary: "Knowing when and how to use external tools is itself a core form of intelligence, so models should be free to call them."
---
## Beliefs

Tool-Use Liberalism holds that intelligence is not measured by what you can do unaided but by what you can get done. Humans did not become formidable by growing bigger brains alone; they built calculators, libraries and search engines and learned to use them. A language model that calls a calculator for arithmetic, a search engine for facts and an interpreter for code is not cheating, it is behaving intelligently. The liberal emphasis is on freedom and judgment: the model decides when a tool helps, and should be trained to do so well.

It sits on the Language side (col 3) toward Harness (row 7): the reasoning is linguistic, but capability comes from the model plus its tools. Its neutral shade reflects how mainstream the idea has become; interleaving reasoning with actions and tool results is now a default pattern for assistants and agents.

## Arguments

- Calling calculators, code interpreters and search engines removes whole categories of errors that models make when working unaided.
- Models can learn to decide when to call tools from self-supervised or demonstration data, rather than relying on hard-coded rules.
- Interleaving reasoning with tool observations lets a model correct itself based on real feedback from the environment.

## Critiques

- Tool calls add latency, cost and new failure modes such as malformed arguments or misread outputs.
- Monolith advocates argue that skills learned internally generalize better than reliance on brittle external interfaces.
- Tool use expands the attack surface, from prompt injection in retrieved content to unintended actions.
