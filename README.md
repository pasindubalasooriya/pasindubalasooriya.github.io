# pasindubalasooriya.github.io

Personal portfolio of Pasindu Dilshan Balasooriya, live at https://pasindubalasooriya.github.io.

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme, using the page structure of
[IsuruMaduranga.github.io](https://github.com/IsuruMaduranga/IsuruMaduranga.github.io) with this site's own palette and typography.

## Run locally

Requires Ruby 3.3 (on Windows: `winget install RubyInstallerTeam.RubyWithDevKit.3.3`, then `ridk install`).

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

Docker works too: `docker compose up` (http://localhost:8080).

Before committing, run `npx prettier . --write` (CI checks formatting).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and pushes `_site` to the `gh-pages` branch that GitHub Pages serves.

## Where content lives

| Content         | File                                                              |
| --------------- | ----------------------------------------------------------------- |
| Home page       | `_pages/about.md`                                                 |
| Writing         | `_posts/` (one stub per Medium article, see below)                |
| Research        | `_bibliography/papers.bib` (ASCII only)                           |
| Projects        | `_projects/` (`category`: `live`, `completed` or `in progress`)   |
| Open source PRs | `_data/contributions.yml`, repo cards in `_data/repositories.yml` |
| Tech stack      | `_data/techstack.yml`                                             |
| Recommendations | `_data/recommendations.yml`                                       |
| Social links    | `_data/socials.yml`                                               |
| Colours, fonts  | `_sass/_themes.scss`, `_sass/_minimal.scss`                       |

### Adding a Medium article

Create `_posts/YYYY-MM-DD-slug.md`. The list links straight to Medium, and the post's own URL redirects there.

```yaml
---
layout: post
title: "Article title"
date: 2026-10-01
redirect: https://medium.com/@pasindudilshanbalasooriya/...
categories: [WSO2]
tags: [wso2, identity]
thumbnail: assets/img/thumbnails/my-article.png
read_time: 8
related_posts: false
---
```

Only the month is shown. When several posts share a month, the day sets their order (higher is listed first).
