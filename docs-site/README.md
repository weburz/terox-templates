# {{ .ProjectName }} — documentation

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

{{ .ProjectDescription }}

The site is built with **Nuxt 4**, **Nuxt UI v4**, **Nuxt Content**, and **Tailwind v4**, pre-wired with brand colors, ESLint + Prettier, and a GitHub Pages deploy workflow. Optional Umami analytics plugin is opt-in at scaffold time.

## Local development

```bash
pnpm install
pnpm dev        # opens at http://localhost:3001
```

## Authoring content

Markdown files live under [`content/`](./content). Each top-level directory is a section; numbered prefixes (`1.`, `2.`) control ordering in the sidebar. Section titles and icons come from `.navigation.yml`.

```
content/
├── 1.getting-started/
│   ├── .navigation.yml          # section title + icon
│   ├── 1.introduction.md
│   └── 2.installation.md
└── 2.guide/
    ├── .navigation.yml
    └── 1.overview.md
```

The schema for page frontmatter is in [`content.config.ts`](./content.config.ts).

## Branding

| Where | What to change |
| --- | --- |
| `app/app.config.ts` | Site name, header/footer text, nav items, social links |
| `app/assets/css/colors.css` | Brand color palettes (Weburz defaults: BurzBlue + BurzYellow) |
| `app/components/AppLogo.vue` | The header logo SVG |
| `public/favicon.svg` | The favicon (currently a placeholder rounded-square mark) |

## Analytics

This scaffold ships an optional [Umami](https://umami.is) plugin at `app/plugins/umami.client.ts` that loads its script from `{{ .UmamiScriptUrl }}`. **The default URL is a placeholder** — edit it to point at your own Umami instance, or delete the plugin file if you're using a different provider (or none).

Set the GitHub Actions secret `UMAMI_WEBSITE_ID` on the repo to enable tracking in the production build; the deploy workflow wires it into `NUXT_PUBLIC_UMAMI_WEBSITE_ID` automatically. With no website ID set, the plugin no-ops at runtime and no script is loaded — so a placeholder URL is harmless until you wire the secret.

## Quality gates

| Script | What it runs |
| --- | --- |
| `pnpm lint` | ESLint flat config (`@nuxt/eslint` + Prettier-compat) |
| `pnpm format:check` / `pnpm format` | Prettier with `prettier-plugin-organize-imports` |
| `pnpm typecheck` | `nuxt typecheck` (vue-tsc) |
| `pnpm build` | Production Nuxt build |
| `pnpm generate` | Prerendered static build (what CI deploys) |

CI runs lint, format-check, type-check, and build on every PR via [`qa.yml`](./.github/workflows/qa.yml). Pushes to `main` also trigger [`deploy.yml`](./.github/workflows/deploy.yml), which prerenders and publishes to GitHub Pages.

## Pre-commit hooks

This repo uses [pre-commit](https://pre-commit.com/) for trailing-whitespace, end-of-file, YAML/JSON syntax checks, ESLint on staged files, and `crisp` for conventional-commit message linting.

```bash
# one-time install per clone:
pnpm setup:hooks
```

## License

MIT &copy; [{{ .AuthorName }}](https://github.com/{{ .GitHubOwner }})

<!-- Badges -->
[license-src]: https://img.shields.io/badge/license-MIT-020420?style=flat&colorA=020420&colorB=00DC82
[license-href]: ./LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
