---
summary: "Each sensor deserves its own specialized processing module, with a fusion layer federating camera, lidar, radar and IMU into one world state."
---
## Beliefs

Perception-Stack Federalism is how many autonomous vehicles and mobile robots have actually been built. Cameras, lidar, radar, IMU and wheel odometry each get a dedicated module tuned to their physics: point-cloud detectors for lidar, image networks for cameras, filters for inertial data. A fusion layer, often probabilistic, reconciles their reports into a single estimate of where things are and where they are going, which planning and control then consume.

It sits right of centre on the World side and near the Harness end: firmly about physical sensing, and organized as a federation of modules with clear interfaces. Its Steady shade marks an established engineering tradition with deep roots in probabilistic robotics. Its main opponents are the end-to-end camps that would feed all sensors into one network and output controls directly; federalists answer that when one sensor fails, a federation degrades gracefully while a monolith may fail in ways nobody can diagnose.

## Arguments

- Sensor-specific modules exploit each modality's physics, such as lidar geometry or radar velocity, rather than forcing a generic encoder to rediscover it.
- Explicit fusion with uncertainty estimates supports redundancy, so the system can detect and tolerate a degraded or failed sensor.
- Modular stacks are easier to validate component by component, which matters for safety cases in vehicles and industrial robots.

## Critiques

- Hand-designed interfaces between modules discard information that learned joint processing could use.
- End-to-end and bird's-eye-view fusion models have shown that learned multi-sensor fusion can outperform late, hand-crafted fusion.
- The stack grows large and costly to maintain, with calibration and synchronization becoming a full-time job.
