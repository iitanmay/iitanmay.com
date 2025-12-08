---
layout: page
title: research
permalink: /research/
description: Broad areas in which I have devoted some time
nav: true
nav_order: 1
horizontal: false
---

<hr>

<div class="accordion">

  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          <span style="font-size: 1.5rem; color: var(--global-theme-color); text-transform: none;">
            &bull; &nbsp; free shear flows
          </span>
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
      <div class="card-body">

        <p>
          During my PhD, I conducted laboratory experiments and numerical simulations to study the dynamics of turbulent jets and fountains. These free shear flows are widely observed in nature, from volcanic eruptions (forced plume) to hydrothermal vents, and in industrial applications like HVAC systems. Jets are purely momentum-driven, whereas fountains are opposed by buoyancy forces that eventually halt their vertical motion, causing them to reverse direction and spread laterally. Figure 1 shows the different classes of turbulent fountains which is determined by the comparative magnitude of buoyancy and momentum fluxes at the fountain source, governed through Froude number. Understanding their interaction in complex environments is crucial for predicting transport phenomena (mass, momentum, heat, etc.) and mixing characteristics (dilution, entrainment, etc.).
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include figure.liquid
             path="assets/img/Fountains_Classification.png"
             class="img-fluid rounded z-depth-1"
             title="Effect of Froude number on turbulent fountains"
             alt="Images showing fountain dynamics"
          %}
          <div class="caption">
            Fig. 1: Images of five aqueous-saline fountains: the forcing at the source is successively increased from panel (a) very weak, (b) weak, (c) intermediate, (d) forced, to (e) highly forced. Figure adapted from <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/rise-heights-of-low-and-highfroudenumber-turbulent-axisymmetric-fountains/ED467BA194491296A527D385D793CD8B">Burridge & Hunt (2012)</a>.
          </div>
        </div>

        <p>
          In particular, I focused on impinging line fountains, where the confinement (distance between the fountain source and the impingement surface) adds further complexity to the flow physics. Under such circumstances, the fountain structure is affected not only by the competition between momentum and buoyancy, but also through quantifying how the domain height (see video 1 below) compares against a <a href="https://pubs.aip.org/aip/pof/article-abstract/19/11/117101/932437/Impinging-axisymmetric-turbulent-fountains?redirectedFrom=fulltext">momentum length scale</a>. The video shows the spatiotemporal evolution of the scalar field supplied at the fountain source. The formation of shear-layer vortices is clearly evident, and the fountain fluid after impingement is significantly affected by buoyancy as it falls back toward the source.
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include video.liquid
             path="assets/video/Turbulent_Fountain_Schematic.mp4"
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

        <h3>Air curtains</h3>
        <p>
          Turbulent fountains subjected to a lateral density stratification are directly relevant to engineering applications such as air curtains and underwater bubble screens. My PhD thesis explored how the lateral buoyancy difference alters the flow structures and the
          <a href="https://link.springer.com/article/10.1007/s10652-023-09948-8">associated fluid transport</a>. We observed that the interaction between the fountain and the stratified ambient creates unique structural asymmetries that significantly impact the spreading behavior. This is shown below in figure 2, where the fountain (green) is deflected sideways due to the horizontal static pressure gradient induced by the density difference between the light and dense fluid. I have also been exploring these transport characteristics from a Lagrangian perspective, where the motion of individual fluid particles is tracked, giving insights into the mechanism of fluid motion. This approach provides useful insights into the maximum sealing effectiveness of air curtains.
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include figure.liquid
             path="assets/img/Research_Fountain_1.png"
             class="img-fluid rounded z-depth-1"
             title="Trajectory of an air curtain"
             alt="Research results showing fountain dynamics"
          %}
          <div class="caption">
            Fig. 2: Influence of a lateral density stratification on the fountain trajectory. Subscripts $d$ and $l$ represent dense and light fluids.
          </div>
        </div>

        <p>
          A key focus of my work was to characterize the statistical behavior and entrainment dynamics of air curtain flows. I conducted time-resolved Particle Image Velocimetry (PIV) measurements and supported them with high-fidelity Large Eddy Simulation (LES) data to obtain an ensemble of flow dynamics at various operating conditions. Our results revealed that when a lateral density stratification is imposed on an impinging line fountain, it enhances the fluid entrainment by up to 20% compared to uniform environments. This increase is driven by the lateral forcing, which modifies the volume flux along the trajectory of the fountain.
        </p>

      </div>
    </div>

  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <span style="font-size: 1.5rem; color: var(--global-theme-color); text-transform: none;">
            &bull; &nbsp; stratified turbulence
          </span>
        </button>
      </h2>
    </div>
    
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
      <div class="card-body">

        <p>
          Stratified turbulence is a ubiquitous phenomenon in geophysical fluid dynamics, occurring when a turbulent flow interacts with a background density stratification. The vertical density gradient introduces a buoyancy force that usually resists vertical motion and mixing. The competition between inertial forces (driving turbulence) and buoyancy forces (suppressing vertical motion) fundamentally changes the flow dynamics, causing the flow to become anisotropic and dominated by horizontal structures and internal waves. Understanding the mechanisms of turbulent dissipation and mixing in such flows is essential for accurate modeling of large-scale natural systems, particularly those featuring buoyancy-driven motions like gravity currents, which are the focus of my research. These currents are commonly observed in nature ranging from atmospheric sea-breeze fronts to deep-ocean turbidity flows and are generally studied using the lock-exchange configuration. Video 2 (a large-eddy simulation conducted using SOMAR) clearly illustrates the development of the Kelvin-Helmholtz (KH) instability at the interface of the two fluids, a crucial mechanism whose roll-up and subsequent collapse drive the majority of mass and momentum exchange within the mixing layer. During my MPhil, I utilized Molecular Tagging Velocimetry (MTV) and Thermometry (MTT) to obtain simultaneous, high-resolution measurements of velocity and density fields. Analyzing this data through the background potential energy (BPE) framework allowed us to quantify an irreversible mixing efficiency and postulate that these "vortical overturns" usually act as key precursors to high mixing efficiency events.
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include video.liquid
             path="assets/video/Gravity_Current.mp4"
             class="img-fluid rounded z-depth-1"
             controls=true
             autoplay=false
             loop=true
             muted=true
          %}
          <div class="caption">
            Video 2: Evolution of a gravity current in a finite-sized domain. Colored fluid is dense.
          </div>
        </div>

        <h3>Propagation characteristics</h3>
        <p>
          I investigate how ambient stratification alters the flow dynamics and propagation speed of these currents. We established the flow regimes as either supercritical (characterized by solitary wave generation) or subcritical (dominated by internal waves) which is governed by the interplay between the current's buoyancy and the ambient stratification strength. These findings, validated against dye visualization experiments, provide robust scaling laws for predicting propagation speeds in complex, stratified environments.
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include figure.liquid
             path="assets/img/publication_preview/agrawal2022dynamics.png"
             class="img-fluid rounded z-depth-1"
             title="Research Figure: Gravity Currents"
             alt="LES simulation of gravity current"
          %}
          <div class="caption">
            Large Eddy Simulation (LES) of a buoyant gravity current in a stratified medium, showing density contours and the generation of internal waves (Agrawal et al., 2022).
          </div>
        </div>

      </div>
    </div>

  </div>

<div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <span style="font-size: 1.5rem; color: var(--global-theme-color); text-transform: none;">
            &bull; &nbsp; wall-bounded flows
          </span>
        </button>
      </h2>
    </div>
    
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree">
      <div class="card-body">

        <p>
          Wall-bounded flows are a class of fluid flows where the presence of a solid boundary significantly influences the flow physics, primarily through the no-slip condition and the formation of boundary layers. My research explores the turbulent statistics and structural characteristics of these flows using high-fidelity experimental techniques.
        </p>

        <h3>Turbulent channel flow</h3>
        <p>
          I have conducted extensive research on fully developed turbulent channel flows to validate and apply the <strong>Single-component Molecular Tagging Velocimetry (1c-MTV)</strong> technique. Experiments were performed in a large-scale water channel facility (aspect ratio > 12) to ensure two-dimensionality. We measured high-resolution streamwise velocity statistics across a range of friction Reynolds numbers ($Re_\tau \approx 360 - 1680$). The non-intrusive nature and high spatial resolution of MTV allowed us to resolve the viscous sublayer and capture near-wall turbulence statistics with high accuracy. The inner-normalized mean velocity and RMS profiles showed excellent agreement with Direct Numerical Simulation (DNS) data, confirming the efficacy of MTV for probing wall-bounded turbulence.
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include figure.liquid
             path="assets/img/Channel_Flow.png"
             class="img-fluid rounded z-depth-1"
             title="Research Figure: Channel Flow"
             alt="Turbulent channel flow velocity profiles"
          %}
          <div class="caption">
            Inner-normalized mean velocity profiles measured using 1c-MTV at various Reynolds numbers, compared against DNS data (dashed lines).
          </div>
        </div>

        <h3>Impinging jets</h3>
        <p>
          Impinging jets represent a complex flow configuration where a free jet strikes a solid surface, creating a stagnation zone followed by the development of a wall jet. These flows are critical in engineering applications requiring high rates of heat and mass transfer, such as the cooling of gas turbine blades and electronic components. My interest lies in understanding the flow structure in the stagnation region and the transition to turbulence in the wall jet, where the interaction between large-scale coherent structures and the solid boundary drives efficient transport.
        </p>

      </div>
    </div>

  </div>

</div>
