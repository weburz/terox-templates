<div align="center">

<img src="./assets/terox-templates.png" alt="A Go gopher in an archive, browsing a folder pulled from a shelf of templates" width="600" />

# 🚀 terox-templates

**Official Weburz template catalogue for the [Terox](https://github.com/Weburz/terox) scaffolder.**

[![License][license-src]][license-href]
[![Powered by Terox][terox-src]][terox-href]
[![Status][status-src]][status-href]

</div>

---

## ✨ One command, fresh repo

```bash
terox scaffold weburz/terox-templates/<template> --output ./my-project
```

Pick a starter, answer a handful of prompts, and you've got a fully-wired Weburz-flavoured repo: **pnpm**, **vitest**, **eslint** flat config, MIT licence, GitHub Actions CI, Dependabot, CODEOWNERS, pre-commit hooks, and a `changelogen`-driven release flow.

## 📦 Templates

|     | Template                            | What it gives you                                                                                                                                                                            |
| --- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟦  | [`npm-package`](./npm-package)      | TypeScript npm package — `unbuild`, `vitest`, `eslint` flat config, GitHub Actions QA + `pnpm publish --provenance` on `v*` tags.                                                            |
| 🟩  | [`nuxt-module`](./nuxt-module)      | Nuxt 4 module — `@nuxt/module-builder`, runtime component, playground app deployed to GitHub Pages, vitest e2e fixture.                                                                      |
| 📚  | [`docs-site`](./docs-site)          | Nuxt 4 documentation site — `@nuxt/content` + `@nuxt/ui` v4 + Tailwind v4, Weburz brand colors, self-hosted Umami analytics, ESLint + Prettier, auto-deploy to GitHub Pages.                  |

More on the way as Weburz grows the catalogue.

## 🎛️ Variables

Every template ships a `terox.json` declaring the variables it prompts for — package name, description, author, GitHub owner/repo, license year, etc. Press <kbd>Enter</kbd> at any prompt to accept the default, or skip prompts entirely with `--set`:

```bash
terox scaffold weburz/terox-templates/npm-package \
  --output ./foo \
  --set PackageName=@weburz/foo \
  --set GitHubRepo=foo \
  --non-interactive
```

## 🧪 Try a template locally

`terox scaffold` accepts a **local directory path** in place of a GitHub ref — useful while iterating on a template:

```bash
terox scaffold ./npm-package --output /tmp/scratch
```

## ➕ Adding a new template

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** — it covers prerequisites, `terox.json` manifest syntax, the `{{ }}` escape gotcha, render-checking, and the three places to update when adding a new template directory.

TL;DR for the impatient:

```bash
cp -r npm-package my-new-template     # or whichever existing template is closest
$EDITOR my-new-template/terox.json    # edit the variables + description
task render -- my-new-template        # render-check with defaults
```

## 🧰 Built on

- 🦫 [**Terox**](https://github.com/Weburz/terox) — the Weburz project scaffolder
- 🔧 Go [`text/template`](https://pkg.go.dev/text/template) — the templating engine under the hood
- 📦 [pnpm](https://pnpm.io/) 11 — the package manager every starter assumes

## 📜 Licence

MIT &copy; [Weburz](https://github.com/Weburz)

<!-- Badges -->
[license-src]: https://img.shields.io/badge/license-MIT-020420?style=flat&colorA=020420&colorB=00DC82
[license-href]: ./LICENSE

[terox-src]: https://img.shields.io/badge/Powered%20by-Terox-020420?style=flat&colorA=020420&colorB=00DC82
[terox-href]: https://github.com/Weburz/terox

[status-src]: https://img.shields.io/badge/status-active-success?style=flat&colorA=020420&colorB=00DC82
[status-href]: https://github.com/Weburz/terox-templates
