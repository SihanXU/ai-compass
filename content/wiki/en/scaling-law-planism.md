---
summary: "Scaling laws make AI progress forecastable, so model size, data and compute should be allocated by plan from fitted curves."
---
## Beliefs

Scaling-Law Planism turns the empirical regularities of deep learning into a planning document. If loss falls as a power law in parameters, data and compute, then next year's model can be specified in advance: fit the curves on small runs, extrapolate, and allocate the budget to the compute-optimal mix. Research becomes forecasting, and a training run becomes the execution of a five-year plan rather than a gamble.

It sits left of centre near the top of the chart, language-leaning because the cleanest scaling curves were measured on text, and Monolith because the plan assumes one large model whose size is the main decision variable. Its paradigm level is Ultra-Orthodox: compute-optimal sizing is now standard practice and the purest expression of the scale recipe, though the doctrine keeps updating its targets as new curves are fitted.

## Arguments

- Test loss has been shown to follow smooth power laws across many orders of magnitude of model size, dataset size and compute.
- Compute-optimal analysis showed that earlier large models were undertrained, and the corrected recipe produced smaller models that outperformed larger ones.
- Predictable scaling lets organizations de-risk enormous training runs by extrapolating from cheap experiments.

## Critiques

- Smooth loss curves do not always translate into predictable downstream capabilities, which can appear abruptly.
- The laws are fitted within a regime; data exhaustion, new architectures or new objectives can break the extrapolation.
- Small-model and efficiency advocates argue that the plan optimizes training cost while ignoring inference cost and deployment reality.
