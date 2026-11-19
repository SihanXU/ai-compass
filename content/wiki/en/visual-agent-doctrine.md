---
summary: "Agents should operate software by looking at the screen and acting on pixels, as humans do, rather than relying on APIs or HTML."
---
## Beliefs

Visual-Agent Doctrine holds that the screen is the one interface every application already has. APIs are incomplete, accessibility trees are inconsistent and HTML is often a mess, but the rendered pixels are always there and always mean what the user sees. So the agent should see the screenshot, find the relevant element, and click, type or scroll, then look again. Perception of interfaces, not parsing of their internals, is what makes an agent general.

It sits just left of centre, a little above mid-height. It treats the screen as a visual world to perceive, which pulls it toward the centre even though the tasks are digital, and it leans on one strong vision-language model even inside agent loops with memory, planning and verification. Its neutral shade reflects a recipe built on today's vision-language models, which only recently became good enough at reading interfaces for this to work at all, though much remains unsolved on long, multi-application tasks.

## Arguments

- Pixel-level operation reaches any application, including legacy software and canvases that expose no API or structured representation.
- Visual prompting tricks, such as marking candidate elements on the screenshot, substantially improve grounding of actions to the right targets.
- Benchmarks in real operating-system environments give a concrete, end-to-end measure of whether agents can complete practical tasks.

## Critiques

- Screenshot-based agents are slow and expensive per step compared with direct API calls, and errors accumulate over long tasks.
- Small visual changes, pop-ups and high-resolution layouts can break grounding in ways structured interfaces avoid.
- API federalists argue that where a clean interface exists, routing through pixels is needlessly fragile.
