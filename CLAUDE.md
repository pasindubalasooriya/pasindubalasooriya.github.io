# CLAUDE.md

Jekyll (al-folio) portfolio for Pasindu Dilshan Balasooriya, deployed to GitHub Pages from the `gh-pages` branch by `.github/workflows/deploy.yml`. See `README.md` for where each kind of content lives.

## Build

- Local Ruby is at `C:\Ruby33-x64\bin` (add to PATH). `RUBYOPT="-E utf-8" bundle exec jekyll build` / `serve`.
- `npx prettier . --write` before committing; CI runs `prettier --check`.

## Conventions

- No em dashes in content; use a spaced hyphen ( - ).
- `_bibliography/papers.bib` must stay ASCII only.
- Writing entries are stub posts with `redirect:` to Medium plus `thumbnail` and `read_time`; never add article bodies.
- Home page stats are computed from `_data/contributions.yml`, `_projects/` and `_posts/`, so don't hardcode counts.
- Theme colours live as CSS variables in `_sass/_themes.scss`; the portfolio visual layer is `_sass/_minimal.scss`, which loads last in `assets/css/main.scss`.
- `assets/js/count.js` is vendored GoatCounter; don't reformat it.
