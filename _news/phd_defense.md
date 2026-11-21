---
layout: post
title: PhD thesis defense at IIT Delhi
date: 2025-09-03
inline: false
related_posts: false
---

On September 3 2025, I successfully defended my PhD thesis titled **"Role of fluid transport on sealing effectiveness of air curtains"** in the Department of Applied Mechanics at IIT Delhi, under the supervision of Prof. Narsing Kumar Jha and Prof. Vamsi Krishna Chalamalla.

Air curtain is a plane turbulent jet that is blown across a doorway to separate the indoor and outdoor air without closing the opening physically. The questions that run through the thesis target the sealing effectiveness of air curtains. A well-operated air curtain suppresses most of the fluid exchange across a doorway, however not all of it. Its sealing effectiveness saturates at around 80-85% no matter how the device is tuned. I wanted to understand where the remaining fluid gets in, and what sets this ceiling.

Approached as a fluid mechanics problem, an air curtain is an impinging line fountain subjected to a lateral density difference, and the thesis works through that configuration from several directions. Numerical simulations using high-fidelity large-eddy simulation (LES) established how the operating regime is governed by the deflection modulus, the ratio of the curtain's momentum flux to the transverse stack effect, and where in that parameter space the sealing is maximum. Laboratory experiments using time-resolved particle image velocimetry (PIV), supported by LES, characterised the velocity statistics and the entrainment into the curtain. A separate thread examined heavy air curtains, where the discharged fluid is denser than the ambient, which turns out to reduce infiltration by roughly 25% relative to a neutrally buoyant curtain at practical operating conditions.

The part I find most rewarding came last: tracking individual fluid particles through the flow showed that infiltration happens by two quite different transport routes at different times. Before the curtain is properly established, outdoor fluid arrives as a gravity current along the floor. Once it is established, that route closes and another opens where the outdoor fluid is entrained into the turbulent core of the curtain itself and then detrained on the indoor side, either before the jet reaches the floor or after it impinges. The second mechanism is intrinsic to the way a turbulent jet works, which is why the sealing effectiveness saturates. Since we cannot eliminate entrainment, a perfectly sealing air curtain is not attainable; it is a limitation inherent to the design.

Much of this work is described in more detail on my [research page]({{ '/research/' | relative_url }}), and the resulting papers are listed under [publications]({{ '/publications/' | relative_url }}). If you are keen to have a look at the slides I used for defense, you can find them [here]({{ '/assets/pdf/PhD_Defense_Slides.pdf' | relative_url }}).

My thanks to Prof. Alakesh Chandra Mandal (IIT Kanpur, India) and Prof. Christina Vanderwel (Southampton, UK), who examined the thesis, and to the committee at IIT Delhi: Prof. Anupam Dewan as chairperson, with Prof. Amitabh Bhattacharya and Prof. Krishnakant Agrawal as internal and external experts.

Any PhD defense is incomplete without a photo with the supervisors and the examiner!

{% include figure.liquid path="assets/img/defense_photo.jpg" width="75%" caption="From left: Prof. Vamsi Chalamalla, Yours Truly, Prof. Narsing Kumar Jha, Prof. Alakesh Chandra Mandal (Examiner from IIT Kanpur)" %}
