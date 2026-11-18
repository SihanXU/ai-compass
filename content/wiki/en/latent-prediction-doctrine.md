---
summary: "Argues models should predict abstract representations of missing or future inputs, not reconstruct pixels or tokens."
---
## Beliefs

Latent-Prediction Doctrine starts from a simple complaint: the world is full of details that cannot and need not be predicted, like the exact pattern of leaves or the grain of a carpet. A model forced to reconstruct every pixel spends its capacity on noise. Instead, encode both the context and the target into a representation space and train a predictor to map one to the other there. The model learns what is predictable, ignores what is not, and ends up with an abstract world model suitable for planning.

It sits toward the World end and high on the Monolith side: the goal is one joint-embedding architecture that learns from video and sensors the way an animal does, then plans with it. Its paradigm level is near the revolutionary edge. It openly rejects both autoregressive token generation and pixel-level generative modeling as the road to general intelligence, which puts it at odds with most of the current mainstream.

## Arguments

- Predicting in latent space avoids the blur and wasted capacity of pixel reconstruction, and joint-embedding predictive architectures learn strong image and video features with comparatively modest compute.
- Abstract predictions are what a planner needs; you do not need the color of every pixel to decide whether a cup will fall.
- Non-generative objectives sidestep the error accumulation that autoregressive models face over long horizons.

## Critiques

- Joint-embedding methods must actively prevent representational collapse, and the tricks used to do so are delicate.
- Generative camps point out that video generators already show some physical consistency and are easy to inspect visually, while latent predictions are hard to audit.
- The planning half of the program is still mostly a blueprint; strong encoders alone do not prove the larger thesis.
