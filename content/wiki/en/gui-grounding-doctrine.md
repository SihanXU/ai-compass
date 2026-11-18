---
summary: "The bottleneck of GUI agents is perception, not planning; an agent must first reliably locate the right element on screen."
---
## Beliefs

GUI-Grounding Doctrine is the sober specialist of the computer-use world. It notices that agents often know perfectly well what to do ("click Save, then close the dialog") and still fail because they click thirty pixels off, confuse two similar icons, or cannot read a dense toolbar. Its program is to make grounding, the mapping from an instruction to a precise screen location or element, a first-class problem with its own data, models and benchmarks, before worrying about grand plans.

It sits right of center because the work is visual perception of real interfaces, and in the Harness half because grounding is usually a module inside a larger agent loop: the planner says what, the grounder says where. Its paradigm level is neutral; it is a classic case of good old-fashioned problem decomposition applied to a new domain.

## Arguments

- Dedicated GUI grounding models and datasets have shown that improving element localization directly raises end-to-end agent task success.
- Overlaying marks or labels on screen regions turns open-ended pointing into a choice among numbered options, sharply improving large multimodal models' accuracy.
- High-resolution screens with small text and icons expose weaknesses in general vision encoders that only targeted training fixes.

## Critiques

- Separating "what" from "where" can be a temporary artifact; stronger native multimodal models may ground well without a special module.
- Accessibility trees and DOM data often give exact element locations for free, making pixel grounding unnecessary where they exist.
- Grounding benchmarks can reward clicking the right box on static screenshots while ignoring dynamic, multi-step interaction.
