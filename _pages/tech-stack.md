---
layout: page
permalink: /tech-stack/
title: tech stack
heading: Tech Stack
subtitle: The languages, frameworks and platforms I build with.
description: Tech stack of Pasindu Dilshan Balasooriya - Java, C#, Spring Boot, .NET, React, WSO2 Identity Server, OAuth2, OIDC, AWS, Docker and Terraform.
nav: true
nav_order: 5
---

<div class="techstack">
  {% for group in site.data.techstack %}
    <h2 class="entry-group">{{ group.category }}</h2>
    <div class="tech-items">
      {% for item in group.items %}
        <span class="tech-item">
          {% if item.slug != blank %}
            <img
              class="tech-icon"
              src="https://cdn.simpleicons.org/{{ item.slug }}/1A1814"
              alt=""
              loading="lazy"
              onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'tech-icon tech-tile',textContent:'{{ item.name | slice: 0 }}'}))"
            >
          {% else %}
            <span class="tech-icon tech-tile" aria-hidden="true">{{ item.name | slice: 0 }}</span>
          {% endif %}
          {{ item.name }}
        </span>
      {% endfor %}
    </div>
  {% endfor %}
</div>
