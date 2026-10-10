---
layout: page
permalink: /recommendations/
title: recommendations
heading: Recommendations
subtitle: What lecturers I've worked with have written about me on LinkedIn.
description: LinkedIn recommendations for Pasindu Dilshan Balasooriya from lecturers at APIIT Sri Lanka.
nav: true
nav_order: 6
---

<div class="recommendations">
  {% for rec in site.data.recommendations.items %}
    <article class="entry recommendation">
      <div class="entry-head">
        <span class="entry-title">{{ rec.name }}</span>
        <span class="entry-date">{{ rec.date }}</span>
      </div>
      <p class="entry-sub">{{ rec.title }}</p>
      <div class="entry-meta"><span class="chip">{{ rec.relationship }}</span></div>
      <blockquote>
        {% for paragraph in rec.text %}
          <p>{{ paragraph }}</p>
        {% endfor %}
      </blockquote>
    </article>
  {% endfor %}
</div>

<a class="entry-link" href="{{ site.data.recommendations.url }}" target="_blank" rel="noopener">view on LinkedIn</a>
