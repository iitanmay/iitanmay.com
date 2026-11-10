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

<!-- TODO(tanmay): if PHOENIX has a project page or a NERC grant page, link it on
     the word "PHOENIX" below. I left it unlinked rather than point at a URL I
     could not verify from here. -->

My current work at Oxford is part of PHOENIX, a NERC-funded project on the influence of complex source and wind conditions on eruptive plume height, led by [Prof. Thomas Aubry](https://sites.google.com/view/thomasjaubry/). An explosive eruption injects ash and gas into the atmosphere as a buoyant multiphase plume, and the height that plume reaches is the quantity operational models most need to get right: it sets the ash dispersal forecast that aviation depends on, and the amount of sulfur delivered to the stratosphere that drives the subsequent climate response.

Most of the models in use were built for a plume rising through a still, horizontally uniform atmosphere. Real eruptions satisfy neither assumption. The source is rarely a simple circular vent, and the wind varies with height, so the plume is sheared as it rises. The result is that plume height is often poorly predicted precisely in the conditions where a forecast matters most.

I am developing an analogue facility to reproduce these conditions in the laboratory, where the source and the ambient can both be controlled and measured.

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

<!-- TODO(tanmay): worth two or three more sentences here on the facility itself
     — tank dimensions, how the stratification is set up, how the crossflow is
     driven, and what you measure. I have deliberately kept the description to
     what the photograph shows rather than guessing at the rig. -->

Figure 2 shows a time-averaged image of a plume released into a sheared, stratified crossflow. The plume rises under its own buoyancy, is progressively bent over by the crossflow, and then spreads laterally once it reaches a level where it is no longer buoyant relative to its surroundings. The height of that intrusion, and how it responds to the shear in the ambient, is what the integral models need to reproduce.

<div class="research-figure">
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

<hr>

## free shear flows

During my PhD, I conducted laboratory experiments and numerical simulations to study the dynamics of turbulent jets and fountains. These free shear flows are widely observed in nature, from volcanic eruptions (forced plume) to hydrothermal vents, and in industrial applications like HVAC systems. Jets are purely momentum-driven, whereas fountains are opposed by buoyancy forces that eventually halt their vertical motion, causing them to reverse direction and spread laterally. Figure 3 shows the different classes of turbulent fountains which is determined by the comparative magnitude of buoyancy and momentum fluxes at the fountain source, governed through Froude number. Understanding their interaction in complex environments is crucial for predicting transport phenomena (mass, momentum, heat, etc.) and mixing characteristics (dilution, entrainment, etc.).

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Fountains_Classification.png"
     class="img-fluid rounded z-depth-1"
     title="Effect of Froude number on turbulent fountains"
     alt="Images showing fountain dynamics"
  %}
  <div class="caption">
    Fig. 3: Images of five aqueous-saline fountains: the forcing at the source is successively increased from panel (a) very weak, (b) weak, (c) intermediate, (d) forced, to (e) highly forced. Figure adapted from <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/rise-heights-of-low-and-highfroudenumber-turbulent-axisymmetric-fountains/ED467BA194491296A527D385D793CD8B">Burridge & Hunt (2012)</a>.
  </div>
</div>

In particular, I focused on impinging line fountains, where the confinement (distance between the fountain source and the impingement surface) adds further complexity to the flow physics. Under such circumstances, the fountain structure is affected not only by the competition between momentum and buoyancy, but also through quantifying how the domain height (see video 1 below) compares against a <a href="https://pubs.aip.org/aip/pof/article-abstract/19/11/117101/932437/Impinging-axisymmetric-turbulent-fountains?redirectedFrom=fulltext">momentum length scale</a>. The video shows the spatiotemporal evolution of the scalar field supplied at the fountain source. The formation of shear-layer vortices is clearly evident, and the fountain fluid after impingement is significantly affected by buoyancy as it falls back toward the source.

<div class="research-figure">
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

### Air curtains

Turbulent fountains subjected to a lateral density stratification are directly relevant to engineering applications such as air curtains and underwater bubble screens. My PhD thesis explored how the lateral buoyancy difference alters the flow structures and the
<a href="https://link.springer.com/article/10.1007/s10652-023-09948-8">associated fluid transport</a>. We observed that the interaction between the fountain and the stratified ambient creates unique structural asymmetries that significantly impact the spreading behavior. This is shown below in figure 4, where the fountain (green) is deflected sideways due to the horizontal static pressure gradient induced by the density difference between the light and dense fluid. I have also been exploring these transport characteristics from a Lagrangian perspective, where the motion of individual fluid particles is tracked, giving insights into the mechanism of fluid motion. This approach provides useful insights into the maximum sealing effectiveness of air curtains.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Research_Fountain_1.png"
     class="img-fluid rounded z-depth-1"
     title="Trajectory of an air curtain"
     alt="Research results showing fountain dynamics"
  %}
  <div class="caption">
    Fig. 4: Influence of a lateral density stratification on the fountain trajectory. Subscripts $d$ and $l$ represent dense and light fluids.
  </div>
</div>

A key focus of my work was to characterize the statistical behavior and entrainment dynamics of air curtain flows. I conducted time-resolved Particle Image Velocimetry (PIV) measurements and supported them with high-fidelity Large Eddy Simulation (LES) data to obtain an ensemble of flow dynamics at various operating conditions. Our results revealed that when a lateral density stratification is imposed on an impinging line fountain, it enhances the fluid entrainment by up to 20% compared to uniform environments. This increase is driven by the lateral forcing, which modifies the volume flux along the trajectory of the fountain.

<hr>

## stratified turbulence

Stratified turbulence is a ubiquitous phenomenon in geophysical fluid dynamics, occurring when a turbulent flow interacts with a background density stratification. The vertical density gradient introduces a buoyancy force that usually resists vertical motion and mixing. The competition between inertial forces (driving turbulence) and buoyancy forces (suppressing vertical motion) fundamentally changes the flow dynamics, causing the flow to become anisotropic and dominated by horizontal structures and internal waves. Understanding the mechanisms of turbulent dissipation and mixing in such flows is essential for accurate modeling of large-scale natural systems, particularly those featuring buoyancy-driven motions like gravity currents, which are the focus of my research. These currents are commonly observed in nature ranging from atmospheric sea-breeze fronts to deep-ocean turbidity flows and are generally studied using the <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/gravity-currents-produced-by-lock-exchange/3B431E47B2F0508F7798BE183D3AABD0">lock-exchange configuration</a>. During my MPhil, I conducted dye-visualization experiments to observe gravity currents in controlled laboratory conditions. Video 2(a) shows a typical gravity current produced using the lock-exchange setup. Here, I had heated the fluid on one side of the lock (thereby reducing its density) and mixed a colored dye with the denser fluid. Video 2(b) illustrates the development of Kelvin-Helmholtz (KH) instabilities at the interface of the two fluids, a crucial mechanism whose roll-up and subsequent collapse drive the majority of mass and momentum exchange within the mixing layer.

<div class="research-figure">
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

### Mixing in gravity currents

Quantifying irreversible turbulent mixing is important for accurate modeling of stratified flows. To estimate this, I employed <a href="https://www.egr.msu.edu/tmual/MTV.html">Molecular Tagging Velocimetry</a> (MTV) and <a href="https://iopscience.iop.org/article/10.1088/0957-0233/17/6/S06/meta">Molecular Tagging Thermometry</a> (MTT) to obtain simultaneous, high-resolution measurements of velocity and temperature (density) fields. Analyzing the experimental data through the <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/available-potential-energy-and-mixing-in-densitystratified-fluids/A45F1A40521FF0A0DC82BC705AD398DA">background potential energy (BPE) framework</a> allowed us to quantify the mixing efficiency in gravity currents. Based on these measurements, <a href="https://pubs.aip.org/aip/pof/article-abstract/33/1/016605/1061197/Probing-the-high-mixing-efficiency-events-in-a?redirectedFrom=fulltext">we postulated</a> that the "vortical overturns" usually act as key precursors to high mixing efficiency events. More recently, I investigated how ambient stratification alters the flow dynamics and propagation speed of these currents. We established the flow regimes as either supercritical (characterized by solitary wave generation) or subcritical (dominated by internal waves) which is governed by the interplay between the current's buoyancy and the ambient stratification strength. Figure 5 shows the development of internal waves when a buoyant (light) gravity-current propagates in a stratified ambient. <a href="https://pubs.aip.org/aip/pof/article-abstract/34/7/076605/2847554/Dynamics-of-a-buoyant-gravity-current-propagating?redirectedFrom=fulltext">These findings</a>, validated against dye visualization experiments, provide robust scaling laws for predicting propagation speeds in complex, stratified environments.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/publication_preview/agrawal2022dynamics.png"
     class="img-fluid rounded z-depth-1"
     title="Research Figure: Gravity Currents"
     alt="LES simulation of gravity current"
  %}
  <div class="caption">
    Fig. 5: Large Eddy Simulation (LES) of a buoyant gravity current in a stratified medium, showing density contours and the generation of internal waves.
  </div>
</div>

<hr>

## wall-bounded flows

Wall-bounded flows are a particular class of fluid flows where the presence of a solid boundary significantly influences the flow physics, primarily through the imposition of a no-slip condition and thus resulting in the formation of boundary layers. My research explores the turbulent statistics and structural characteristics of these flows using high-fidelity experimental techniques.

### Turbulent channel flow

I have studied fully developed turbulent channel flows to validate and apply the **Single-component Molecular Tagging Velocimetry (1c-MTV)** technique. The experiments were performed in a large-scale water channel facility located at The University of Melbourne. The channel had an aspect ratio > 12 which ensured two-dimensionality of the flow at the test section. We measured high-resolution streamwise velocity statistics across a range of friction Reynolds numbers ($Re_\tau \approx 360 - 1680$). The non-intrusive nature and high spatial resolution of MTV allowed us to resolve the viscous sublayer and capture near-wall turbulence statistics with high accuracy. The inner-normalized mean velocity and RMS profiles showed excellent agreement with Direct Numerical Simulation (DNS) data, confirming the efficacy of MTV for probing wall-bounded turbulence.

<div class="research-figure">
  {% include figure.liquid
     path="assets/img/Channel_Flow.png"
     class="img-fluid rounded z-depth-1"
     title="Research Figure: Channel Flow"
     alt="Turbulent channel flow velocity profiles"
  %}
  <div class="caption">
    Fig. 6: An example deformed image that is processed to obtain the velocity profile. Solid line indicates the nominal position of the wall and the horizontal velocity component is obtained at every pixel location.
  </div>
</div>

### Impinging jets

Impinging jets represent a complex flow configuration where a stream of fluid (jet) strikes on to a solid surface, creating a stagnation zone followed by the development of a wall jet in the lateral/radial direction. These flows are critical in engineering applications requiring high rates of heat and mass transfer, such as the cooling of gas turbine blades and electronic components. My interest lies in understanding the flow structure in the stagnation region and the transition to turbulence in the wall jet, where the interaction between large-scale coherent structures and the solid boundary drives efficient transport.
