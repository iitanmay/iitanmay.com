---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 1
horizontal: false
---

<div class="research-section">
  <h2>1. Turbulent jets and fountains</h2>
  <br>
  
  {% include video.liquid 
     path="assets/video/jets_schematic.mp4" 
     class="img-fluid rounded z-depth-1" 
     controls=true 
     autoplay=true 
     loop=true 
     muted=true
  %}
  <div class="caption">
    Schematic representation of a turbulent line fountain in a stratified environment.
  </div>

  <p>
    Turbulent jets and fountains are fundamental shear flows observed widely in nature, from volcanic eruptions to hydrothermal vents, and in industrial applications like HVAC systems and waste disposal. While jets are purely momentum-driven, fountains possess an opposing buoyancy flux that eventually halts their vertical rise, causing them to reverse direction and spread. Understanding their interaction with complex environments is crucial for predicting mass transport and mixing efficiency.
  </p>

  <p>
    My research investigates the dynamics of turbulent line fountains, particularly when subjected to a lateral density stratification—a configuration directly relevant to engineering applications like air curtains and underwater bubble screens. Using a synergistic approach of <strong>Time-Resolved Particle Image Velocimetry (TR-PIV)</strong> and high-fidelity <strong>Large-Eddy Simulations (LES)</strong>, I explore how lateral buoyancy alters flow structures and statistical behavior. We discovered a novel trajectory scaling law ($x_{cl} \propto z^2$) that is distinct from canonical jets in crossflow, driven by bi-directional baroclinic forcing and adverse pressure gradients. A key focus of my work is characterizing the <strong>entrainment behavior</strong> as a function of the source <strong>Froude number ($Fr_0$)</strong>. Our results reveal that lateral stratification enhances fluid entrainment by up to 20% compared to uniform environments. Furthermore, quantitative analysis of the turbulence statistics demonstrates that lateral stratification actively energizes the flow's natural low-frequency flapping mode, leading to distinct anisotropy in the Reynolds stresses.
  </p>

{% include figure.liquid
     path="assets/img/Buoyant_Jets.png"
     class="img-fluid rounded z-depth-1"
     title="Research Figure: Buoyant Jets"
     alt="Research results showing fountain dynamics"
  %}

  <div class="caption">
    Visualization of buoyant jets and their interaction with the ambient environment.
  </div>
</div>

<hr>

<div class="research-section">
  <h2>2. Mixing in gravity currents</h2>
  <br>

{% include video.liquid
     path="assets/video/gc_schematic.mp4"
     class="img-fluid rounded z-depth-1"
     controls=true
     autoplay=true
     loop=true
     muted=true
  %}

  <div class="caption">
    Schematic of a lock-exchange gravity current propagation.
  </div>

  <p>
    Gravity currents are buoyancy-driven flows where a fluid of one density spreads horizontally into a fluid of a different density. Ubiquitous in nature—manifesting as sea-breeze fronts, turbidity currents, or avalanches—these flows play a vital role in environmental mass transport. The fundamental "lock-exchange" configuration serves as a canonical model to study the propagation dynamics and the complex turbulent mixing that occurs at the interface of the two fluids.
  </p>

  <p>
    My work focuses on the turbulent mixing and propagation characteristics of these currents using a dual approach of <strong>Large Eddy Simulations (LES)</strong> and advanced laboratory experiments. We utilized <strong>Molecular Tagging Velocimetry (MTV)</strong> and <strong>Thermometry (MTT)</strong> to obtain simultaneous, high-resolution measurements of velocity and density fields. Analyzing this data through the <strong>background potential energy (BPE) framework</strong> allowed us to quantify mixing efficiency and identify "vortical overturns" as key precursors to irreversible mixing events. Furthermore, I investigated how ambient stratification fundamentally alters flow dynamics. We established that the flow regime—<strong>supercritical</strong> (characterized by solitary wave generation) or <strong>subcritical</strong> (dominated by internal wave radiation)—is governed by the interplay between the current's buoyancy and the ambient stratification strength. These findings, validated against dye visualization experiments, provide robust scaling laws for predicting propagation speeds in complex, stratified environments.
  </p>

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
