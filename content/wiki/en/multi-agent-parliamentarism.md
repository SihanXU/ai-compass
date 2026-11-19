---
summary: "Better answers come from several model instances proposing, debating, critiquing and voting than from any single model's first draft."
---
## Beliefs

Multi-Agent Parliamentarism believes in deliberative democracy for language models. Instead of trusting one sample, convene several agents (or several copies of one), let each propose an answer, have them read and challenge each other's reasoning over a few rounds, and settle by vote or by a judge. Errors that one instance makes confidently are, the hope goes, caught by another; consensus filters noise, and adversarial debate exposes weak arguments.

It sits at the Language edge, since the entire process is conducted in natural-language argument, and near the bottom toward the Harness end, since the intelligence lives in the protocol of interaction rather than in a single forward pass. Its paradigm level is Neutral: debate and voting are old ideas from both human institutions and ensemble learning, newly applied to LLMs.

## Arguments

- Multi-agent debate methods have reported gains in factuality and mathematical reasoning over single-agent answers on several benchmarks.
- Majority voting over sampled reasoning chains (self-consistency) is a simple, robust improvement, and debate generalizes it with interaction.
- Debate has been proposed as a scalable oversight mechanism, where a judge weaker than the debaters can still identify the better argument.

## Critiques

- Copies of the same model share the same blind spots, so their "parliament" can converge confidently on the same wrong answer.
- Debate is expensive: many agents times many rounds multiplies inference cost, and simple voting often captures most of the gain.
- Persuasiveness is not truth; agents can be swayed by confident or verbose arguments, as human parliaments sometimes are.
