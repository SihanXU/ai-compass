---
summary: "Holds that the world is three-dimensional, so models should represent geometry explicitly rather than reasoning from flat images."
---
## Beliefs

Geometric Doctrine is tired of models that see the world as a stack of flat pictures. Objects have depth, shape and pose; cameras move; occlusion follows rules. A system that represents scenes in 3D, whether as point clouds, meshes, neural radiance fields or Gaussian splats, can render novel views, reason about where things are and plan how to reach them. Two-dimensional models must relearn the consequences of geometry from countless examples; geometric models get them as structure.

It sits right of center on the World side, just into the Harness half: not a single giant model but not an agent toolkit either, a structured representation layer that both monoliths and robotics stacks can build on. Its paradigm level is ultra-revolutionary. Multi-view geometry is an old discipline, and putting explicit 3D structure back at the centre runs sharply against the mainstream bet on unstructured scale.

## Arguments

- Neural radiance fields and Gaussian splatting reconstruct photorealistic 3D scenes from ordinary photos and render new viewpoints consistently.
- Explicit 3D representations make spatial queries such as distance, collision and reachability direct and exact.
- Robots and AR systems act in metric space; a geometric model gives them coordinates rather than impressions.

## Critiques

- Large 2D and video models increasingly show implicit 3D consistency, suggesting explicit geometry may be learned rather than imposed.
- 3D data is scarce compared with images, and per-scene optimization methods are slow to generalize.
- Geometry captures shape but not semantics, function or physics on its own.
