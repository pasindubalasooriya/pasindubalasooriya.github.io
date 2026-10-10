---
layout: page
title: projects
permalink: /projects/
heading: Projects
subtitle: Identity, security and cloud systems, plus the apps I built along the way.
description: Projects by Pasindu Dilshan Balasooriya - identity and authorization systems with WSO2 Identity Server and ThunderID, AWS infrastructure, and full-stack apps.
nav: true
nav_order: 3
display_categories: [live, completed, in progress]
---

<div class="project-list">
  {% for category in page.display_categories %}
    {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
    {% if categorized_projects.size > 0 %}
      <h2 class="entry-group">{{ category }}</h2>
      {% for project in categorized_projects %}
        {% include project_item.liquid %}
      {% endfor %}
    {% endif %}
  {% endfor %}
</div>
