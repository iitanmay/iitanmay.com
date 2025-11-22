---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 1
horizontal: false
---

<div class="research-section">
  <h2>1. Free shear flows (jets, fountains) </h2>
  <br>

  <p>
    Turbulent jets and fountains are free shear flows observed widely in nature, from volcanic eruptions to hydrothermal vents, and in industrial applications like HVAC systems. While jets are purely momentum-driven, fountains possess an opposing buoyancy flux that eventually halts their vertical motion, causing them to reverse direction and spread laterally. Understanding their interaction with complex environments is crucial for predicting mass transport and mixing characteristics.
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
      Evolution of a turbulent fountain (green) in a uniformly dense ambient. The data is from an LES computation conducted using SOMAR.
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

<hr>

<div class="research-section">
  <h2>2. Stratified turbulent flows (gravity currents) </h2>
  <br>

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
      Schematic of a lock-exchange gravity current propagation.
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

<hr>
