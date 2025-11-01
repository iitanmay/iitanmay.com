---
layout: post
title: Animesh completed his internship in the fluid mechanics lab
date: 2025-07-14
inline: false
related_posts: false
---

During the summer of 2025, we had the pleasure of hosting Animesh Yadav (B. Tech. student at Thapar University, Patiala) for two months in the Fluid Mechanics laboratory at IIT Delhi.

In this timeframe, he conducted simulations of viscosity-stratified jets using RANS closure models in ANSYS Fluent. Our primary interest was to understand how the injection of a low-viscosity fluid into a high-viscosity ambient, without any density anomaly, affects the flow behavior and statistics.

Towards this, Animesh used a viscosity ratio $\left(m = \frac{\nu_{host}}{\nu_{jet}}\right)$ to quantify their dynamics, and conducted simulations for $m$ ranging between 1 to 45. Figure 1 shows the qualitative distribution of axial velocity which clearly demonstrates how a more viscous ambient results in a larger radial spread of the jet. For all these cases, the Reynolds number was set to be 2000. The case with $m = $ 1 corresponds to a canonical jet.

{% include figure.liquid path="assets/img/animesh_internship/contours.png" caption="" width="60%" %}

He validated these numerical results against an [experimental work](https://link.springer.com/article/10.1007/s00348-004-0888-x) with similar geometrical setup and parameter space. This validation is shown in figure 2 where he favorably compares the decay rate of centerline velocity ($1/B_u$), and the spread rate of the jet ($c$) at different viscosity ratio.

{% include figure.liquid path="assets/img/animesh_internship/validation.png" caption="Figure 2: Validation of flow statistics." width="75%" %}

Animesh will be presenting this work during the [Fluid Mechanics and Fluid Power (FMFP) Conference](https://www.fmfp2025.com/) in December 2025. I'll provide a link to the conference proceedings once they are available online.
