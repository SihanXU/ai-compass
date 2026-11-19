---
summary: "Agents should operate computers the way people do, through screens, mouse and keyboard, because that interface already reaches every application."
---
## Beliefs

Computer-Use Liberalism starts from a simple observation: almost all digital work is already exposed through a graphical interface built for humans, while only a fraction is exposed through clean APIs. Rather than waiting for every vendor to publish tools, let the agent look at the screen, move the pointer, click and type. The mouse and keyboard become the universal adapter, and the long tail of legacy software, internal dashboards and forms becomes reachable overnight.

It sits left of centre, because the agent still reasons mostly in language even as it perceives pixels and acts in an environment, and in the upper half toward Monolith, because one model increasingly runs the whole loop of screenshot, decision and action. Its "liberalism" is a laissez-faire attitude toward integration: no permission or API required. Its paradigm level is revolutionary.

## Arguments

- Benchmarks in real operating systems and realistic web environments show agents can complete multi-step tasks across ordinary applications with no custom integration.
- The GUI is the one interface every application is guaranteed to have, so coverage is maximal by construction.
- Human demonstrations of computer use are abundant and naturally recorded, offering a large supply of training signal.

## Critiques

- Pixel-level operation is slow and fragile compared to an API call; a moved button or a pop-up can derail a long task.
- Acting with full user privileges on a live machine raises serious safety and prompt-injection risks from whatever is on screen.
- Protocol advocates argue that emulating a human at the screen is a clever workaround for missing APIs, not a destination.
