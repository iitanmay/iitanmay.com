---
layout: post
title: PhD thesis defense at IIT Delhi
date: 2025-09-03
inline: false
related_posts: false
---

On September 3 2025, I successfully defended my PhD thesis titled **"Role of fluid transport on sealing effectiveness of air curtains"** in the Department of Applied Mechanics at IIT Delhi, under the supervision of Prof. Narsing Kumar Jha and Prof. Vamsi Krishna Chalamalla.

An air curtain is a plane turbulent jet blown across a doorway to hold the indoor and outdoor air apart without closing the opening. The question that runs through the thesis is a simple one to state and an awkward one to answer: a well-operated air curtain stops most of the exchange across a doorway, but not all of it, and its sealing effectiveness saturates at around 85% no matter how the device is tuned. I wanted to know where the remaining fluid gets in, and what sets that ceiling.

Approached as a fluid mechanics problem, an air curtain is an impinging line fountain subjected to a lateral density difference, and the thesis works through that configuration from several directions. Numerical simulations using both RANS and large-eddy simulation established how the operating regime is governed by the deflection modulus, the ratio of the jet's momentum flux to the transverse stack effect, and where in that parameter space the sealing works best. Laboratory experiments using time-resolved particle image velocimetry, supported by further LES, characterised the velocity statistics and the entrainment. A separate thread examined heavy air curtains, where the discharged air is denser than the ambient, which turns out to reduce infiltration by roughly a quarter relative to a neutrally buoyant curtain at practical operating conditions.

The part I find most satisfying came last. Tracking individual fluid particles through the flow showed that infiltration happens by two quite different routes at different times. Before the curtain is properly established, outdoor fluid arrives as a gravity current along the floor. Once it is established, that route closes and another opens: outdoor fluid is entrained into the turbulent core of the curtain itself and then detrained on the indoor side, either before the jet reaches the floor or after it impinges. The second mechanism is intrinsic to the way a turbulent jet works, which is why the sealing effectiveness saturates where it does. You cannot entrain without also detraining.

Much of this work is described in more detail on my [research page]({{ '/research/' | relative_url }}), and the resulting papers are listed under [publications]({{ '/publications/' | relative_url }}).

---

#### PhD Defense Slides

<a href="/assets/pdf/PhD_Defense_Slides.pdf" target="_blank" rel="noopener noreferrer">
  {% include figure.liquid path="assets/img/phd_defense_slides_cover.png" width="75%" class="mx-auto d-block rounded z-depth-1" alt="Title slide: Role of fluid transport on sealing effectiveness of air curtains" %}
</a>

<p class="text-center">
  <a href="/assets/pdf/PhD_Defense_Slides.pdf" target="_blank" rel="noopener noreferrer">Download the slides (PDF, 19&nbsp;MB)</a>
</p>

---

My thanks to Prof. Alakesh Chandra Mandal of IIT Kanpur, who examined the thesis, and to the committee at IIT Delhi: Prof. Anupam Dewan as chairperson, with Prof. Amitabh Bhattacharya and Prof. Krishnakant Agrawal as internal and external experts.

Any PhD defense is incomplete without a photo with the supervisors and the examiner!

{% include figure.liquid path="assets/img/defense_photo.jpg" width="75%" caption="From left: Prof. Vamsi Chalamalla, Yours Truly, Prof. Narsing Kumar Jha, Prof. Alakesh Chandra Mandal (Examiner from IIT Kanpur)" %}
