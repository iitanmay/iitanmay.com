---
layout: post
title: Article revisiting the equivalence of top and bottom gravity currents published in AGU Books
date: 2025-11-06
inline: false
related_posts: false
---

A manuscript written with [Marius Ungarish](https://www.cs.technion.ac.il/) (Department of Computer Science, Technion, Haifa) and Vamsi K Chalamalla (Department of Applied Mechanics, IIT Delhi) has now been published as Chapter 6 of _Particulate Gravity Currents: Theory, Experiments, and Environmental Applications_, Geophysical Monograph 291, published by Wiley for the American Geophysical Union. It looks at the gravity currents that propagate along the bottom wall (floor) and establishes their equivalence with those that run along the top surface due to them being lighter than the ambient fluid.

These two configurations have largely been studied as separate problems. Our main point in this chapter is that they are not vividly different: under conditions we make precise, the top and bottom currents are equivalent, in the sense that they behave as mirror images of one another about the boundary they propagate along, with the same thickness and the same speed of propagation. The equivalence had been overlooked in earlier works, and it matters practically, because it means data, insight and theoretical predictions obtained for one configuration can be carried across to the other with a high degree of confidence.

Two approaches to the slumping phase, where the current advances at constant speed, coexist in the literature: empirical or data-processing analysis, and shallow-water theory. We argue that the empirical scaling is the weaker of the two. It normalises the current's speed by the speed of the internal stratification wave, a quantity belonging to the ambient fluid alone and describing a different phenomenon from the current itself. One consequence is that the resulting dimensionless speed ranges over roughly 0.1 to infinity, which is awkward to interpret and worse to extrapolate from. The shallow-water treatment, by contrast, scales on the reduced gravity that actually drives the current. With a small extension, namely a redefinition of the stratification parameter so that it runs from zero for an unstratified ambient to one for maximal stratification, it covers top and bottom currents within a single framework.

This work grew directly out of our earlier _Physics of Fluids_ paper on [buoyant gravity currents propagating in a linearly stratified medium](https://pubs.aip.org/aip/pof/article-abstract/34/7/076605/2847554/Dynamics-of-a-buoyant-gravity-current-propagating), which dealt with currents along the top surface and produced a curve fit for the front speed. One of the more useful outcomes of the present chapter is seeing where that fit holds and where it does not: it agrees well with the shallow-water predictions over much of the parameter range, but departs from them as the stratification approaches its maximum. Setting the two side by side is what the equivalence makes possible.

It was a pleasure to work on this with Prof. Ungarish, whose shallow-water treatment of gravity currents much of the analysis rests on. You can read the chapter [here](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1002/9781394216727.ch6).

{% comment %}
TODO(tanmay): a figure would help, and Figure 6.1 (the schematic of the top
and bottom currents with the rho-z diagram) is the obvious one. I extracted
it from the PDF you sent, but that copy carries the diagonal "REVISED
PROOFS" watermark across it, so I have not used it. Send a clean version
and I will place it here.
{% endcomment %}
