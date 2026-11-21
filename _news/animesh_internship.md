---
layout: post
title: A preliminary numerical study of viscosity-stratified jets
date: 2025-07-14
inline: false
related_posts: false
---

During the summer of 2025, we had the pleasure of hosting Mr. Animesh Yadav, an undergraduate at Thapar University, India, for two months in the Fluid Mechanics laboratory at IIT Delhi. In this timeframe, he conducted numerical simulations of viscosity-stratified jets using RANS closure models in ANSYS Fluent. Our primary interest was to understand how the injection of a low-viscosity fluid into a high-viscosity ambient, without any density anomaly, affects the flow development and the resulting statistics.

Towards this, Animesh employed a viscosity ratio $m = \frac{\nu_{\text{host}}}{\nu_{\text{jet}}}$ to quantify their dynamics, and conducted simulations for $m$ ranging between 1 to 45. Figure 1 shows the qualitative distribution of axial velocity which clearly demonstrates how a more viscous ambient results in a larger radial spread of the jet. For all these cases, the Reynolds number was set at 2000. The case with $m = 1$ corresponds to a canonical jet.

{% include figure.liquid path="assets/img/animesh_internship/contours.png" caption="Figure 1: Axial velocity contours near the inlet at viscosity ratios $m = 1$, 20 and 45. A more viscous ambient produces a larger radial spread of the jet." width="60%" class="mx-auto d-block" %}

He validated these simulations against an [experimental work](https://link.springer.com/article/10.1007/s00348-004-0888-x) with similar geometrical setup and parameter space. This validation is shown in figure 2 where he favorably compares the decay rate of centerline velocity $\left(1/B_u\right)$, and the spread rate of the jet $\left(c\right)$ at different viscosity ratio.

{% include figure.liquid path="assets/img/animesh_internship/validation.png" caption="Figure 2: Validation of flow statistics against experiment. Decay rate of the centreline velocity $1/B_u$ (black, left axis) and jet spread rate $c$ (red, right axis) against viscosity ratio $m$." width="75%" class="mx-auto d-block" %}

Animesh presented this work during the [Fluid Mechanics and Fluid Power (FMFP) Conference](https://www.fmfp2025.com/) in December 2025. I wish him the best for his future endeavors!
