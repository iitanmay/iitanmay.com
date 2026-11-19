---
layout: post
date: 2026-03-31
title: New study providing insights into turbulent impinging line fountains published in Journal of Fluid Mechanics
inline: false
---

Some of my PhD work on turbulent line fountains has come out in the _Journal of Fluid Mechanics_.

A fountain is what you get when you force a dense fluid upwards into a lighter one. Momentum carries it up, buoyancy pulls it back, and somewhere in between it stalls, turns over and falls around itself. Almost everything we know about them assumes the surrounding fluid is uniform. In practice it often is not: an air curtain across a doorway has warm air on one side and cold on the other, and a bubble screen in water sits in much the same situation. The fountain feels that density difference sideways the whole time it is rising.

This study is about what the sideways difference actually does. We ran large-eddy simulations alongside time-resolved particle image velocimetry, so that the measurements and the computations could check each other over a wide range of lateral stratification.

{% include figure.liquid path="assets/img/jfm2026_fig5.png" width="75%" caption="Spatiotemporal evolution of fountains in uniform (left) vs. laterally stratified (right) ambients. The stratified case shows asymmetric wall jets and lateral deflection." class="mx-auto d-block" %}

The trajectory was the first surprise. It follows a noticeably steeper power law than a jet in a crossflow does, and the reason is that the forcing here is not one-directional. The fountain is pushed from both sides at once, and the surface it impinges on sets up an adverse pressure gradient that works against it. The flow also loses its symmetry, spreading further on the buoyant side than on the dense one. Interestingly, the mean velocity profiles can still be collapsed onto one another if you normalise each side by its own length scale; the turbulence profiles cannot.

The result I find most interesting concerns the unsteadiness. A line fountain in a uniform ambient already flaps slowly from side to side on its own. Adding a lateral density difference feeds that motion rather than damping it, and it came through more strongly in the experiments than in the simulations. That has a practical consequence: a flapping fountain entrains more of its surroundings, up to 20% more than in a uniform ambient. For an air curtain, that entrained fluid is precisely what the device is installed to keep out.

You can read the paper [here](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/effects-of-lateral-stratification-on-the-dynamics-of-turbulent-impinging-line-fountains/60DFA4E51AE969281F27E811A6263DD4). This work was carried out with my supervisors, Vamsi Krishna Chalamalla and Narsing Kumar Jha at IIT Delhi.
