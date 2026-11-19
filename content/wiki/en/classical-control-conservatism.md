---
summary: "Proven control theory, from PID to MPC and Kalman filters, should run the robot; learning is welcome only where it earns its keep."
---
## Beliefs

Classical-Control Conservatism trusts what has flown aircraft, landed rockets and run factories for decades. PID loops, state estimation with Kalman filters, LQR and model predictive control come with stability margins, analyzable failure modes and engineers who know how to tune them. Learned policies may be impressive in demos, the conservative says, but a controller you cannot bound is a controller you cannot certify, and a robot that is right almost every time will, on the remaining occasion, hurt something.

It sits right of centre and low toward the Harness end, among the Modular Multimodalists: it favors explicit, modular loops over one end-to-end network, and the intelligence lives in how the parts are wired. Its steady shade puts it on the mainstream side. That is less an insult than a description: these methods are mature, ubiquitous and boring in the best sense, and every flashy robot learning paper still runs a low-level controller somewhere underneath.

## Arguments

- Classical controllers come with stability and robustness guarantees that can be analyzed and certified, which safety-critical industries require.
- They need little or no training data and behave predictably out of distribution, where learned policies can fail silently.
- Many learned robot systems still rely on classical low-level controllers and state estimators, showing the old stack remains load-bearing.

## Critiques

- Hand-modeled dynamics break down with contact-rich manipulation, deformable objects and unstructured environments, where learning shines.
- Tuning and system identification are labour-intensive and do not transfer across robots or tasks.
- Guarantees hold only under the model's assumptions, so the certainty can be partly illusory when the world deviates from them.
