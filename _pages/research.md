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
            &bull; &nbsp; Free shear flows
          </span>
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
      <div class="card-body">

        <p>
          During my PhD, I conducted laboratory experiments and numerical simulations to study the dynamics of turbulent jets and fountains. These free shear flows are widely observed in nature, from volcanic eruptions (forced plume) to hydrothermal vents, and in industrial applications like HVAC systems. Jets are purely momentum-driven, whereas fountains are opposed by buoyancy forces that eventually halt their vertical motion, causing them to reverse direction and spread laterally. Figure 1 shows the different classes of turbulent fountains which is determined by the comparative magnitude of buoyancy and momentum fluxes at the fountain souce. Understanding their interaction in complex environments is crucial for predicting transport phenomena (mass, momentum, heat, etc.) and mixing characteristics (dilution, entrainment, etc.).
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include figure.liquid
             path="assets/img/Fountains_Classification.png"
             class="img-fluid rounded z-depth-1"
             title="Different types of turbulent fountains"
             alt="Images showing fountain dynamics"
          %}
          <div class="caption">
            Fig. 1: Images of five aqueous-saline fountains: the forcing at the source is successively increased from panel (a) very weak, (b) weak, (c) intermediate, (d) forced, to (e) highly forced. Figure adapted from <a href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/rise-heights-of-low-and-highfroudenumber-turbulent-axisymmetric-fountains/ED467BA194491296A527D385D793CD8B">Burridge & Hunt (2012)</a>.
          </div>
        </div>

        <p>
          In particular, I was working on impinging line fountains where the confinement (distance between the fountain source and the impingement surface) adds further complexity to the flow physics. Under such circumstances, the fountain structure is affected not only by the competition between momentum and buoyancy, but also through quantifying how the domain height (see video 1 below) compares against a <a href="https://pubs.aip.org/aip/pof/article-abstract/19/11/117101/932437/Impinging-axisymmetric-turbulent-fountains?redirectedFrom=fulltext">momentum length scale</a>.
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

        <h3>Flow structures and fluid transport</h3>
        <p>
          My research investigates the dynamics of turbulent fountains, particularly when subjected to a lateral density stratification. This configuration is directly relevant to engineering applications like air curtains and underwater bubble screens. Using a synergistic approach of experiments and high-fidelity numerical simulations, I explore how lateral buoyancy alters flow structures and the associated fluid transport. We have observed that the interaction between the fountain and the stratified ambient creates unique structural asymmetries that significantly impact the spreading behavior. I am also interested to look at the transport characteristics from a Lagrangian perspective where the motion of individual fluid particle is tracked, giving insights into the mechanism of fluid motion.
        </p>

        <div style="width: 70%; margin: 0 auto; text-align: center;">
          {% include figure.liquid
             path="assets/img/Research_Fountain_1.png"
             class="img-fluid rounded z-depth-1"
             title="Research Figure: Buoyant Jets"
             alt="Research results showing fountain dynamics"
          %}
          <div class="caption">
            Influence of a lateral density stratification on the fountain trajectory. Subscripts $d$ and $l$ represent dense and light fluids.
          </div>
        </div>

        <h3>Statistics and entrainment dynamics</h3>
        <p>
          A key focus of my work is characterizing the statistical behavior and entrainment dynamics of these flows. We specifically look at the entrainment behavior of turbulent fountains as a function of the source Froude number ($Fr_0$). Our results reveal that when a lateral stratification is imposed, it enhances the fluid entrainment by up to 20% compared to uniform environments. This increase is driven by the the lateral forcing which modifies the volume flux along the trajectory of the fountain.
        </p>

      </div>
    </div>

  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <span style="font-size: 1.5rem; color: var(--global-theme-color); text-transform: none;">
            &bull; &nbsp; Stratified turbulence (gravity currents, mixing)
          </span>
        </button>
      </h2>
    </div>
    
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
      <div class="card-body">

        <p>
          Gravity currents are buoyancy-driven flows where a fluid of one density spreads horizontally into a fluid of a different density. Ubiquitous in nature, manifesting as sea-breeze fronts, turbidity currents, or avalanches, these flows play a vital role in environmental mass transport. The fundamental "lock-exchange" configuration serves as a canonical model to study the propagation dynamics and the complex turbulent mixing that occurs at the interface of the two fluids.
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
            Evolution of a typical gravity current in a finite-sized domain.
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

        <h3>Small-scale turbulent mixing</h3>
        <p>
          My work also focuses on the turbulent mixing within these currents using a dual approach of LES and advanced laboratory experiments. We utilized Molecular Tagging Velocimetry (MTV) and Thermometry (MTT) to obtain simultaneous, high-resolution measurements of velocity and density fields. Analyzing this data through the background potential energy (BPE) framework allowed us to quantify an irreversible mixing efficiency and identify that "vortical overturns" usually act as key precursors to high mixing efficiency events.
        </p>

      </div>
    </div>

  </div>

<div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <span style="font-size: 1.5rem; color: var(--global-theme-color); text-transform: none;">
            &bull; &nbsp; Wall-bounded flows (channel flow, impinging jets)
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
