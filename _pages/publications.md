---
layout: page
permalink: /publications/
title: research
heading: Research
subtitle: >
  Peer-reviewed work on cloud compliance and data sovereignty. Also on
  <a href="https://www.researchgate.net/profile/Pasindu-Balasooriya-4" target="_blank" rel="noopener">ResearchGate</a>,
  <a href="https://scholar.google.com/citations?user=Y7KCGnwAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a> and
  <a href="https://orcid.org/0009-0003-7994-1195" target="_blank" rel="noopener">ORCID</a>.
description: Research publications by Pasindu Dilshan Balasooriya on cloud compliance, data residency, and sovereign management of NHS patient data on AWS.
schema_type: CollectionPage
nav: true
nav_order: 2
# Set to true to show the in-page bib search (the script only loads with it).
search: false
---

<!-- _pages/publications.md -->

{% if page.search %}
{% include bib_search.liquid %}
{% endif %}

<div class="publications">

{% bibliography %}

</div>

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Beyond Data Residency: Compensating Controls for Sovereign Management of NHS Patient Data on AWS under the DSP Toolkit",
    "author": [
      { "@id": {{ '/' | absolute_url | append: '#person' | jsonify }}, "@type": "Person", "name": "B. M. P. D. Balasooriya" },
      { "@type": "Person", "name": "D. P. P. Mahindapala" }
    ],
    "datePublished": "2026-10",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "Book",
      "name": "Proceedings of the APIIT International Research Conference (AIRC) 2026",
      "isbn": "978-624-6201-21-0",
      "publisher": { "@type": "Organization", "name": "APIIT Sri Lanka" }
    },
    "keywords": ["Data residency", "Management sovereignty", "DSP Toolkit v8", "AWS", "NHS PII"],
    "award": ["Best Paper", "Best Presenter"],
    "abstract": "Storing NHS patient data in the AWS London Region fixes where it sits, not who can act on it: the management plane stays global. Through a systematic review of 36 studies, the paper shows no prior work maps DSP Toolkit v8 to AWS controls, then proposes a compensating-controls framework binding DSP Toolkit and UK GDPR Article 28 obligations to customer-managed KMS keys, Service Control Policies, immutable CloudTrail and a self-hosted WSO2 API Manager gateway, verified in a sandbox AWS organisation.",
    "url": "https://www.researchgate.net/publication/415165328_BEYOND_DATA_RESIDENCY_COMPENSATING_CONTROLS_FOR_SOVEREIGN_MANAGEMENT_OF_NHS_PATIENT_DATA_ON_AWS_UNDER_THE_DSP_TOOLKIT"
  }
</script>
