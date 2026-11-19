---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed work on environmental fluid dynamics, turbulence and computational methods, newest first.
nav: true
nav_order: 2
---

<p class="pub-intro">
  The full publication record is also available on
  <a href="https://scholar.google.com/citations?user=Jum9p6sAAAAJ">Google Scholar</a>.
</p>

{% include bib_search.liquid %}

{% comment %}
Split by status. An entry carrying status={inpress} in papers.bib appears
under "In press"; everything else is listed under "Published". The in-press
block is not grouped by year, since a single forthcoming item does not need a
year heading above it.
{% endcomment %}

## In press

<div class="publications">

{% bibliography --query @*[status=inpress] --group_by none %}

</div>

## Published

<div class="publications">

{% bibliography --query @*[status!=inpress] %}

</div>
