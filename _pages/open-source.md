---
layout: page
permalink: /open-source/
title: open source
heading: Open Source
subtitle: Pull requests to WSO2, ThunderID and other open-source projects, plus my own repositories.
description: Open-source contributions by Pasindu Dilshan Balasooriya to WSO2 Identity Server docs, identity-apps, ThunderID and more.
nav: true
nav_order: 4
---

{% assign prs = site.data.contributions %}
{% assign merged = prs | where: "status", "Merged" %}

<p class="entry-sub">{{ merged.size }} merged · {{ prs.size | minus: merged.size }} open</p>

{% assign prs_by_repo = prs | group_by: "repo" %}
{% for group in prs_by_repo %}

<h2 class="entry-group">{{ group.name }}</h2>
{% for pr in group.items %}
<article class="entry">
  <div class="entry-head">
    <a class="entry-title entry-title-sm" href="{{ pr.url }}" target="_blank" rel="noopener">{{ pr.description }}</a>
    <span class="chip {% if pr.status == 'Merged' %}chip-accent{% endif %}">{{ pr.status | downcase }}</span>
  </div>
  <div class="entry-meta"><span>{{ pr.repo }} {{ pr.pr }}</span></div>
</article>
{% endfor %}
{% endfor %}

{% assign gh_user = site.data.repositories.github_users | first %}

{% if gh_user %}

## Activity

<div class="activity">
  <img
    src="https://ghchart.rshah.org/{{ site.activity_color | default: '0F7A5A' }}/{{ gh_user }}"
    alt="GitHub contribution graph for {{ gh_user }}"
    loading="lazy"
  >
</div>
{% endif %}

{% if site.data.repositories.github_repos %}

## Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
