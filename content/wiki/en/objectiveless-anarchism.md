---
summary: "Ambitious objectives are deceptive; open-ended search for novelty and interestingness finds stepping stones that goal-driven optimisation never would."
---
## Beliefs

Objectiveless Anarchism holds that fixing a loss function is the original sin of machine learning. Great discoveries are reached through stepping stones that look nothing like the destination, so optimising directly toward an ambitious goal steers you away from the very intermediate steps you need. Its alternative is to search for novelty, diversity and interestingness, keep an ever-growing archive of different solutions, and let environments and problems co-evolve with the agents that solve them.

It sits at the Harness extreme because its "intelligence" is an open-ended process, archives plus generators plus selection, rather than a single trained model, and it leans slightly toward the Language side in today's form, where language models increasingly serve as judges of what counts as interesting. Its shade is the most revolutionary on the chart: it questions not a method but the very idea of an objective.

## Arguments

- Novelty search, which rewards behavioural novelty and ignores the goal, has solved deceptive maze tasks where objective-based search got stuck.
- Systems that co-generate environments and agents have produced increasingly complex challenges and solutions that could not be reached by training directly on the hardest tasks.
- Quality-diversity methods, which keep the best solution for each behavioural niche, routinely yield more robust repertoires than single-objective optimisation.

## Critiques

- "No objective" is not literally true: novelty metrics, behaviour descriptors and archives are all hand-designed choices that smuggle objectives back in.
- Open-ended systems are hard to evaluate, and without a target it is easy to mistake endless variety for genuine progress.
- In practice the field's biggest leaps have come from very clear objectives, next-token prediction among them.
