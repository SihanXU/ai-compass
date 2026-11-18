---
summary: "Before scaling or deploying models further, we must understand what they compute internally, and that understanding is achievable."
---
## Beliefs

Interpretability Reformism believes the black box can be opened and should be, sooner rather than later. Attribution methods, probing classifiers, feature visualization, sparse dictionary learning and causal interventions on activations are its toolkit. The goal is not to replace neural networks with something more legible but to reform how we build them: debug them like software, audit them before deployment, and catch deceptive or brittle behaviour from the inside rather than waiting for it to show up in outputs.

It sits on the Language side (col 2) at mid-height, since most of its recent energy has gone into language models, and since it studies a single model's internals while happily building tooling around it. The neutral shade fits a reformist rather than revolutionary posture: it does not oppose deep learning or scale, it wants them accompanied by understanding, much as engineering disciplines eventually acquired measurement and inspection.

## Arguments

- Interpretability tools have found concrete, verifiable mechanisms and features inside trained networks, showing internals are not hopelessly opaque.
- Internal analysis can detect spurious features and shortcuts that pass standard evaluations, catching failures before deployment.
- Steering via identified directions or features gives a form of control that complements training-time methods like fine-tuning.

## Critiques

- Critics note that many attribution and probing results are fragile or method-dependent, so explanations can be more persuasive than accurate.
- Understanding of small models or narrow behaviours may not scale to frontier models with vast numbers of interacting features.
- Accelerationists argue the field is slow relative to capability progress, and that behavioural evaluation is the more practical safeguard.
