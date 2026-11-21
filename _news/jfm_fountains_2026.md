---
layout: post
date: 2026-03-31
title: New study providing insights into turbulent impinging line fountains published in Journal of Fluid Mechanics
inline: false
---

A part of my PhD work that investigates the dynamics of turbulent line fountains has now been published in the _Journal of Fluid Mechanics_.

Broadly, fountain refers to the flow you observe when a dense fluid is forced upwards into a lighter one. Pretty much like the water fountains in an airy ambient that are so prevalent around us! Momentum carries the fountain fluid up, and buoyancy pulls it back. Somewhere in between, it stalls, turns over and falls around itself.

They have largely been studied under the assumption that the surrounding fluid is uniform. However, in many situations it is often not the case. Air curtains, installed on doorways, have warm air on one side and cold on the other. Similarly, a bubble screen in water sits in much the same situation. The fountain feels that lateral density difference the whole time it rises through the ambient fluid.

In this study, we conducted large-eddy simulations (LES) alongside time-resolved particle image velocimetry (PIV), so that the laboratory measurements and the computations could check each other over a wide range of lateral stratification.

{% include figure.liquid path="assets/img/jfm2026_fig5.png" width="75%" caption="Spatiotemporal evolution of fountains in uniform (left) vs. laterally stratified (right) ambients. The stratified case shows asymmetric wall jets and lateral deflection." class="mx-auto d-block" %}

The trajectory of these fountains was the first pleasant surprise. We found that it followed a noticeably steeper power law than what a jet follows in a crossflow. The reason is that the forcing here is not one-directional. The fountain is pushed from both sides at once, and the surface it impinges on sets up an adverse pressure gradient that works against it. Furthermore, the flow also loses its symmetry which is somewhat expected due to the initial asymmetry of the density field. This leads to a larger spreading on the buoyant side than on the dense side. Interestingly though, the mean velocity profiles can still be collapsed onto one another if you normalise each side by its own length scale; the turbulence profiles cannot.

The result I find most fascinating concerns the unsteadiness. A line fountain in a uniform ambient already flaps slowly from side to side on its own. Adding a lateral density difference feeds that motion rather than damping it, and it came through more strongly in the experiments than in the simulations. That has a practical consequence: a flapping fountain entrains more of its surroundings, up to 20% more than in a uniform ambient. For an air curtain, that entrained fluid is precisely what the device is installed to keep out.

You can read the paper [here](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/effects-of-lateral-stratification-on-the-dynamics-of-turbulent-impinging-line-fountains/60DFA4E51AE969281F27E811A6263DD4). This work was carried out with my supervisors, Vamsi Krishna Chalamalla and Narsing Kumar Jha at IIT Delhi. If you have any questions regarding this work or on jets or fountains in general, please feel free to contact me.
