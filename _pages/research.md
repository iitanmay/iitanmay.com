---
layout: page
title: research
permalink: /research/
description: Broad areas in which I have devoted some time
nav: true
nav_order: 1
horizontal: false
toc:
  sidebar: left
---

<hr>

## volcanic plumes

<p class="section-methods">Laboratory experiments &middot; large-eddy simulation &middot; integral plume models</p>

{% comment %}
TODO(tanmay): if PHOENIX has a project page or a NERC grant page, link it on
the word "PHOENIX" below. I left it unlinked rather than point at a URL I
could not verify from here.
{% endcomment %}

My current work at Oxford is part of PHOENIX, a NERC-funded project on the influence of complex source and wind conditions on eruptive plume height, led by [Prof. Thomas Aubry](https://sites.google.com/view/thomasjaubry/). An explosive eruption injects ash and gas into the atmosphere as a buoyant multiphase plume, and the height that plume reaches is the quantity operational models most need to get right: it sets the ash dispersal forecast that aviation depends on, and the amount of sulfur delivered to the stratosphere that drives the subsequent climate response.

Most of the models in use were built for a plume rising through a still, horizontally uniform atmosphere. Real eruptions satisfy neither assumption. The source is rarely a simple circular vent, and the wind varies with height, so the plume is sheared as it rises. The result is that plume height is often poorly predicted precisely in the conditions where a forecast matters most.

I am developing an analogue facility to reproduce these conditions in the laboratory, where the source and the ambient can both be controlled and measured. The present setup is a prototype tank, one metre long and thirty centimetres wide, in which a buoyant plume is released into a density-stratified ambient. Our interest is in how the plume rise height depends on the shear profile imposed on the ambient.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/phoenix/plume_facility.jpg"
     class="img-fluid rounded z-depth-1"
     title="Analogue plume facility at Oxford"
     alt="Laboratory flow facility: an acrylic tank with pumps, a multi-port inlet manifold and a backlight panel"
  %}
  <div class="caption">
    Fig. 1: The analogue plume facility. The tank is filled with a density-stratified ambient, through which a buoyant plume is released from a source at the base.
  </div>
</div>

Figure 2 shows a time-averaged image of a plume released into a sheared, stratified crossflow. The plume rises under its own buoyancy, is progressively bent over by the crossflow, and then spreads laterally once it reaches a level where it is no longer buoyant relative to its surroundings. The height of that intrusion, and how it responds to the shear in the ambient, is what the integral models need to reproduce.

<div class="research-figure research-figure--wide">
  {% include figure.liquid
     path="assets/img/phoenix/plume_crossflow.jpg"
     class="img-fluid rounded z-depth-1"
     title="Plume in a sheared, stratified crossflow"
     alt="Time-averaged dye image of a plume rising, bending over in a crossflow and spreading laterally"
  %}
  <div class="caption">
    Fig. 2: Time-averaged image of a dyed plume injected into a sheared and stratified crossflow. The plume bends over and spreads laterally at its level of neutral buoyancy.
  </div>
</div>

Alongside the experiments, the project combines observational data from field sites such as Campi Flegrei with three-dimensional numerical models, with the aim of improving the one-dimensional plume models that operational forecasting relies on.

This work is with Thomas Aubry at Oxford, together with the project's UK and international partners.

<hr>

## jets and fountains

<p class="section-methods">Time-resolved particle image velocimetry &middot; dye visualisation &middot; large-eddy simulation &middot; RANS &middot; Lagrangian particle tracking</p>

During my PhD, I conducted laboratory experiments and numerical simulations to study the dynamics of turbulent jets and fountains. These free shear flows are widely observed in nature, from volcanic eruptions (forced plume) to hydrothermal vents, and in industrial applications like HVAC systems. Jets are purely momentum-driven, whereas fountains are opposed by buoyancy forces that eventually halt their vertical motion, causing them to reverse direction and spread laterally. Figure 3 shows the different classes of turbulent fountains which is determined by the comparative magnitude of buoyancy and momentum fluxes at the fountain source, governed through Froude number. Understanding their interaction in complex environments is crucial for predicting transport phenomena (mass, momentum, heat, etc.) and mixing characteristics (dilution, entrainment, etc.).

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Fountains_Classification.png"
     class="img-fluid rounded z-depth-1"
     title="Effect of Froude number on turbulent fountains"
     alt="Five aqueous-saline fountains photographed at successively higher source Froude number"
  %}
  <div class="caption">
    Fig. 3: Images of five aqueous-saline fountains: the forcing at the source is successively increased from panel (a) very weak, (b) weak, (c) intermediate, (d) forced, to (e) highly forced. Figure adapted from <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/rise-heights-of-low-and-highfroudenumber-turbulent-axisymmetric-fountains/ED467BA194491296A527D385D793CD8B">Burridge & Hunt (2012)</a>.
  </div>
</div>

In particular, I focused on impinging line fountains, where the confinement (distance between the fountain source and the impingement surface) adds further complexity to the flow physics. Under such circumstances, the fountain structure is affected not only by the competition between momentum and buoyancy, but also through quantifying how the domain height (see video 1 below) compares against a <a href="https://pubs.aip.org/aip/pof/article-abstract/19/11/117101/932437/Impinging-axisymmetric-turbulent-fountains?redirectedFrom=fulltext">momentum length scale</a>. The video shows the spatiotemporal evolution of the scalar field supplied at the fountain source. The formation of shear-layer vortices is clearly evident, and the fountain fluid after impingement is significantly affected by buoyancy as it falls back toward the source.

<div class="research-figure research-figure--wide">
  {% include video.liquid
     path="assets/video/Turbulent_Fountain_Schematic.mp4"
     poster="assets/img/video_poster/Turbulent_Fountain_Schematic.jpg"
     preload="none"
     class="img-fluid rounded z-depth-1"
     controls=true
     autoplay=false
     loop=true
     muted=true
  %}
  <div class="caption">
    Video 1: Evolution of an impinging turbulent fountain (green) in a uniformly dense ambient. The data is from an LES computation conducted using SOMAR.
  </div>
</div>

Fountains subjected to a lateral density stratification are directly relevant to engineering applications such as aerodynamic sealing of doorways and underwater bubble screens. My PhD thesis explored how the lateral buoyancy difference alters the flow structures and the
<a href="https://link.springer.com/article/10.1007/s10652-023-09948-8">associated fluid transport</a>. We observed that the interaction between the fountain and the stratified ambient creates unique structural asymmetries that significantly impact the spreading behavior. This is shown below in figure 4, where the fountain (green) is deflected sideways due to the horizontal static pressure gradient induced by the density difference between the light and dense fluid. I have also been exploring these transport characteristics from a Lagrangian perspective, where the motion of individual fluid particles is tracked, giving insights into the mechanism of fluid motion. This approach provides useful insights into the maximum sealing effectiveness that such a flow can achieve.

<div class="research-figure research-figure--wide">
  {% include figure.liquid
     path="assets/img/Research_Fountain_1.png"
     class="img-fluid rounded z-depth-1"
     title="Trajectory of a fountain in a laterally stratified ambient"
     alt="Schematic of a fountain deflected sideways by a lateral density difference"
  %}
  <div class="caption">
    Fig. 4: Influence of a lateral density stratification on the fountain trajectory. Subscripts $d$ and $l$ represent dense and light fluids.
  </div>
</div>

A key focus of my work was to characterize the statistical behavior and entrainment dynamics of these flows. I conducted time-resolved Particle Image Velocimetry (PIV) measurements and supported them with high-fidelity Large Eddy Simulation (LES) data to obtain an ensemble of flow dynamics at various operating conditions. Our results revealed that when a lateral density stratification is imposed on an impinging line fountain, it enhances the fluid entrainment by up to 20% compared to uniform environments. This increase is driven by the lateral forcing, which modifies the volume flux along the trajectory of the fountain.

This work was done with Narsing Kumar Jha and Vamsi Krishna Chalamalla at IIT Delhi, with Shresth Agarwal contributing to the heavy jet study.

<div class="research-outputs">
  <p class="research-outputs-label">Research outputs</p>
  <ol>
    <li>Agrawal, T., Chalamalla, V. K., &amp; Jha, N. K. (2026). <a href="https://journals.aps.org/prfluids/abstract/10.1103/w685-jwvk">Infiltration and transport dynamics in air curtains</a>. <em>Physical Review Fluids</em>.</li>
    <li>Agrawal, T., Chalamalla, V. K., &amp; Jha, N. K. (2026). <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/effects-of-lateral-stratification-on-the-dynamics-of-turbulent-impinging-line-fountains/60DFA4E51AE969281F27E811A6263DD4">Effects of lateral stratification on the dynamics of turbulent impinging line fountains</a>. <em>Journal of Fluid Mechanics</em>.</li>
    <li>Agrawal, T., Agarwal, S., Chalamalla, V. K., &amp; Jha, N. K. (2024). <a href="https://link.springer.com/article/10.1007/s10652-023-09948-8">Performance and flow dynamics of heavy air curtains using experiments and numerical simulations</a>. <em>Environmental Fluid Mechanics</em>.</li>
    <li>Agrawal, T., Jha, N. K., &amp; Chalamalla, V. K. (2023). <a href="https://www.sciencedirect.com/science/article/abs/pii/S0045793023001731?via%3Dihub">Numerical investigation of air curtain flows in the doorway of a building using RANS and LES</a>. <em>Computers &amp; Fluids</em>.</li>
  </ol>
</div>

<hr>

## gravity currents

<p class="section-methods">Molecular tagging velocimetry and thermometry &middot; dye visualisation &middot; large-eddy simulation &middot; shallow-water theory</p>

Stratified turbulence is a ubiquitous phenomenon in geophysical fluid dynamics, occurring when a turbulent flow interacts with a background density stratification. The vertical density gradient introduces a buoyancy force that usually resists vertical motion and mixing. The competition between inertial forces (driving turbulence) and buoyancy forces (suppressing vertical motion) fundamentally changes the flow dynamics, causing the flow to become anisotropic and dominated by horizontal structures and internal waves. Understanding the mechanisms of turbulent dissipation and mixing in such flows is essential for accurate modeling of large-scale natural systems, particularly those featuring buoyancy-driven motions like gravity currents, which are commonly observed in nature ranging from atmospheric sea-breeze fronts to deep-ocean turbidity flows.

These currents are generally studied using the <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/gravity-currents-produced-by-lock-exchange/3B431E47B2F0508F7798BE183D3AABD0">lock-exchange configuration</a>. During my MPhil, I conducted dye-visualization experiments to observe gravity currents in controlled laboratory conditions. Video 2(a) shows a typical gravity current produced using the lock-exchange setup. Here, I had heated the fluid on one side of the lock (thereby reducing its density) and mixed a colored dye with the denser fluid. Video 2(b) illustrates the development of Kelvin-Helmholtz (KH) instabilities at the interface of the two fluids, a crucial mechanism whose roll-up and subsequent collapse drive the majority of mass and momentum exchange within the mixing layer.

<div class="research-figure research-figure--wide">
  {% include video.liquid
     path="assets/video/GC_Visual.mp4"
     poster="assets/img/video_poster/GC_Visual.jpg"
     preload="none"
     class="img-fluid rounded z-depth-1"
     controls=true
     autoplay=false
     loop=true
     muted=true
  %}
  <div class="caption">
    Video 2(a): Gravity current formed using a lock-exchange setup. Images from three cameras stitched together to provide half-view of the flow facility. Heavy fluid is dyed blue. Clear fluid is warmer than the blue fluid.
  </div>
</div>

<div class="research-figure">
  {% include video.liquid
     path="assets/video/KH_GC.mp4"
     poster="assets/img/video_poster/KH_GC.jpg"
     preload="none"
     class="img-fluid rounded z-depth-1"
     controls=true
     autoplay=false
     loop=true
     muted=true
  %}
  <div class="caption">
    Video 2(b): Visualization of KH instabilities at the interface. Fluorescein is mixed with the heavy fluid and the flow is illuminated using a continuous wave laser.
  </div>
</div>

Quantifying irreversible turbulent mixing is important for accurate modeling of stratified flows. To estimate this, I employed <a href="https://www.egr.msu.edu/tmual/MTV.html">Molecular Tagging Velocimetry</a> (MTV) and <a href="https://iopscience.iop.org/article/10.1088/0957-0233/17/6/S06/meta">Molecular Tagging Thermometry</a> (MTT) to obtain simultaneous, high-resolution measurements of velocity and temperature (density) fields. Analyzing the experimental data through the <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/available-potential-energy-and-mixing-in-densitystratified-fluids/A45F1A40521FF0A0DC82BC705AD398DA">background potential energy (BPE) framework</a> allowed us to quantify the mixing efficiency in gravity currents. Based on these measurements, <a href="https://pubs.aip.org/aip/pof/article-abstract/33/1/016605/1061197/Probing-the-high-mixing-efficiency-events-in-a?redirectedFrom=fulltext">we postulated</a> that the "vortical overturns" usually act as key precursors to high mixing efficiency events.

More recently, I investigated how ambient stratification alters the flow dynamics and propagation speed of these currents. We established the flow regimes as either supercritical (characterized by solitary wave generation) or subcritical (dominated by internal waves) which is governed by the interplay between the current's buoyancy and the ambient stratification strength. Figure 5 shows the development of internal waves when a buoyant (light) gravity-current propagates in a stratified ambient. <a href="https://pubs.aip.org/aip/pof/article-abstract/34/7/076605/2847554/Dynamics-of-a-buoyant-gravity-current-propagating?redirectedFrom=fulltext">These findings</a>, validated against dye visualization experiments, provide robust scaling laws for predicting propagation speeds in complex, stratified environments.

<div class="research-figure research-figure--wide">
  {% include figure.liquid
     path="assets/img/publication_preview/agrawal2022dynamics.png"
     class="img-fluid rounded z-depth-1"
     title="LES of a buoyant gravity current in a stratified medium"
     alt="Density contours from a large-eddy simulation showing a buoyant gravity current and internal waves"
  %}
  <div class="caption">
    Fig. 5: Large Eddy Simulation (LES) of a buoyant gravity current in a stratified medium, showing density contours and the generation of internal waves.
  </div>
</div>

The molecular tagging measurements were made with Joe Klewicki, Jimmy Philip, Spencer Zimmerman and Bhaarath Ramesh at the University of Melbourne. The stratified gravity current work was done with Vamsi Krishna Chalamalla and Siva Heramb Peddada at IIT Delhi, and extended with Marius Ungarish at the Technion.

<div class="research-outputs">
  <p class="research-outputs-label">Research outputs</p>
  <ol>
    <li>Agrawal, T., Ungarish, M., &amp; Chalamalla, V. (2025). <a href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1002/9781394216727.ch6">On the equivalence of top and bottom gravity currents in a linearly stratified channel: A review and extension of data processing and prediction theory</a>. In <em>Particulate Gravity Currents: Theory, Experiments, and Environmental Applications</em> (pp. 89&ndash;102). Wiley.</li>
    <li>Agrawal, T., Peddada, S. H., &amp; Chalamalla, V. K. (2022). <a href="https://pubs.aip.org/aip/pof/article-abstract/34/7/076605/2847554/Dynamics-of-a-buoyant-gravity-current-propagating">Dynamics of a buoyant gravity current propagating in a linearly stratified medium</a>. <em>Physics of Fluids</em>.</li>
    <li>Agrawal, T., Ramesh, B., Zimmerman, S. J., Philip, J., &amp; Klewicki, J. C. (2021). <a href="https://pubs.aip.org/aip/pof/article-abstract/33/1/016605/1061197/Probing-the-high-mixing-efficiency-events-in-a">Probing the high mixing efficiency events in a lock-exchange flow through simultaneous velocity and temperature measurements</a>. <em>Physics of Fluids</em>.</li>
  </ol>
</div>

<hr>

## wall-bounded turbulence

<p class="section-methods">Single-component molecular tagging velocimetry &middot; large-scale water channel facility</p>

Wall-bounded flows are a particular class of fluid flows where the presence of a solid boundary significantly influences the flow physics, primarily through the imposition of a no-slip condition and thus resulting in the formation of boundary layers. My research explores the turbulent statistics and structural characteristics of these flows using high-fidelity experimental techniques. A related configuration that interests me is the impinging jet, where a stream of fluid strikes a solid surface and creates a stagnation zone followed by a wall jet spreading radially. These flows matter wherever high rates of heat and mass transfer are needed, such as the cooling of gas turbine blades and electronic components, and the open question I find most interesting is how large-scale coherent structures interact with the boundary to drive that transport.

I have studied fully developed turbulent channel flows to validate and apply the **Single-component Molecular Tagging Velocimetry (1c-MTV)** technique. The experiments were performed in a large-scale water channel facility located at The University of Melbourne. The channel had an aspect ratio > 12 which ensured two-dimensionality of the flow at the test section. We measured high-resolution streamwise velocity statistics across a range of friction Reynolds numbers ($Re_\tau \approx 360 - 1680$). The non-intrusive nature and high spatial resolution of MTV allowed us to resolve the viscous sublayer and capture near-wall turbulence statistics with high accuracy. The inner-normalized mean velocity and RMS profiles showed excellent agreement with Direct Numerical Simulation (DNS) data, confirming the efficacy of MTV for probing wall-bounded turbulence.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Channel_Flow.png"
     class="img-fluid rounded z-depth-1"
     title="Deformed MTV tagging image in a turbulent channel flow"
     alt="A deformed molecular tagging line near the channel wall, processed to obtain the streamwise velocity profile"
  %}
  <div class="caption">
    Fig. 6: An example deformed image that is processed to obtain the velocity profile. Solid line indicates the nominal position of the wall and the horizontal velocity component is obtained at every pixel location.
  </div>
</div>

The channel flow measurements were made with Joe Klewicki, Jimmy Philip and Spencer Zimmerman at the University of Melbourne.

<hr>

## computational methods

<p class="section-methods">Nonlinear multigrid &middot; GPU acceleration &middot; lattice Boltzmann method &middot; immersed boundary method</p>

Much of the simulation work above rests on solvers that have to be fast enough to be useful, and during my MS at National Tsing Hua University I worked on the numerical methods themselves rather than on a particular flow. The central problem is that the pressure-velocity coupling in incompressible flow is expensive to resolve: a naive solver spends almost all of its time removing long-wavelength error from the pressure field, and that cost grows sharply with grid size.

Multigrid addresses this by solving the same problem on a hierarchy of successively coarser grids, where the long-wavelength error is cheap to remove, and transferring the correction back up. Figure 7 shows the schedule of a full approximation scheme V-cycle across eight levels, with the number of relaxation sweeps performed at each. We built a nonlinear multigrid solver for the unsteady three-dimensional incompressible Navier-Stokes equations on a multi-GPU cluster, using an artificial-compressibility solver as the smoother, and reported speedups of up to two orders of magnitude over the single-grid equivalent.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Multigrid_Methods.png"
     class="img-fluid rounded z-depth-1"
     title="Full approximation scheme V-cycle schedule"
     alt="Diagram of a full approximation scheme V-cycle across eight grid levels, annotated with the work done at each level"
  %}
  <div class="caption">
    Fig. 7: Schedule of a full approximation scheme (FAS) V-cycle across eight grid levels, annotated with the relaxation work performed at each level.
  </div>
</div>

Running across several GPUs introduces a second problem: each device holds only part of the domain and needs its neighbours' boundary values at every step. Figure 8 shows the halo exchange that handles this, with interior cells in blue and the overlap regions that have to be communicated in orange. Overlapping that communication with computation, using multiple streams, is what keeps the devices from idling.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Parallel_Computing.png"
     class="img-fluid rounded z-depth-1"
     title="Domain decomposition and halo exchange across GPUs"
     alt="Diagram of a decomposed grid showing interior cells and the overlap regions exchanged between neighbouring subdomains"
  %}
  <div class="caption">
    Fig. 8: Domain decomposition across devices. Interior cells are shown in blue and the halo regions exchanged with neighbouring subdomains in orange.
  </div>
</div>

Alongside this I implemented GPU-accelerated lattice Boltzmann solvers and immersed-boundary methods for fluid-solid interaction problems, where the boundary is represented through forcing on a fixed grid rather than by meshing the body.

This work was done with Chao-An Lin, Xiaolei Shi, Feng-Nan Hwang and Tzu-Hsuan Chiu at National Tsing Hua University.

<div class="research-outputs">
  <p class="research-outputs-label">Research outputs</p>
  <ol>
    <li>Shi, X., Agrawal, T., Lin, C.-A., Hwang, F.-N., &amp; Chiu, T.-H. (2020). <a href="https://www.sciencedirect.com/science/article/abs/pii/S0021999120302217">A parallel nonlinear multigrid solver for unsteady incompressible flow simulation on multi-GPU cluster</a>. <em>Journal of Computational Physics</em>.</li>
  </ol>
</div>
