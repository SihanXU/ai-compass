---
summary: "Autonomous driving should be one neural network mapping camera pixels directly to steering and throttle, with no hand-built modules in between."
---
## Beliefs

End-to-End Driving Absolutism looks at the classic self-driving stack of perception, prediction, planning and control, each with its own team, interface and failure modes, and wants to delete the boundaries. Train one network on huge volumes of human driving, feed it raw sensor data, and have it output the trajectory or control commands directly. Intermediate representations may still exist inside the network, but they are learned rather than specified.

It sits at the top-right of the chart: about as World as possible, since its inputs are pixels and its outputs are physical motion, and fully Monolith because the whole point is to replace a federation of modules with one model. Its paradigm score is mildly revolutionary. Early demonstrations of pixel-to-steering learning are decades old, but the approach became an industrial bet only once fleet data and compute caught up.

## Arguments

- Hand-designed interfaces between modules discard information; an end-to-end network can pass whatever is useful from perception to planning.
- Planning-oriented joint training lets every component be optimized for the final driving objective rather than its own proxy metric.
- Large fleets generate driving data at a scale that favors learned policies over hand-tuned rules.

## Critiques

- End-to-end systems are hard to verify, certify and debug when they fail on a rare scenario.
- Imitating human drivers inherits human mistakes and struggles with situations underrepresented in the data.
- Modular rivals argue that explicit perception and planning give interpretable guarantees regulators and safety engineers need.
