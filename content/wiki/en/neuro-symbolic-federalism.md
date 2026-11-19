---
summary: "Neural networks should handle perception and pattern recognition while symbolic systems handle reasoning, with each governing its own domain."
---
## Beliefs

Neuro-Symbolic Federalism proposes a division of powers. Neural networks are unmatched at turning messy sensory input into useful representations, but they reason unreliably, generalize poorly outside their training distribution, and cannot explain themselves. Symbolic systems (logic, programs, search, theorem provers) reason exactly and transparently but cannot perceive. So let each govern its own province: networks parse scenes, text and intuitions into symbols, and symbolic engines manipulate those symbols with guarantees.

It sits left of center, because the symbols it reasons over are named and language-like even when grounded in perception of the world (scenes, objects, geometry), and at the very bottom, the Harness end, because the architecture is explicitly a federation of heterogeneous components. Its shade is Revolutionary: it revives the long tradition of symbolic and hybrid AI that the neural mainstream set aside, more reconciliation than rupture in tone, but a clear break with today's recipe.

## Arguments

- Neuro-symbolic concept learners that parse images into object representations and execute symbolic programs over them reach strong accuracy on compositional visual reasoning with less data.
- Pairing a neural language model with a symbolic deduction engine solved olympiad geometry problems at a high level, with every step machine-checkable.
- Symbolic components provide interpretability and verifiable guarantees that matter in safety-critical and scientific settings.

## Critiques

- The interface between neural and symbolic parts is where systems break, and designing the symbol vocabulary by hand does not scale.
- Many neuro-symbolic successes are confined to domains with clean formal structure, like geometry or synthetic scenes.
- Scale advocates argue that large models increasingly reason well enough on their own, making the symbolic half optional.
