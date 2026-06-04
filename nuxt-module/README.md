# {{ .PackageName }}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

{{ .PackageDescription }}

> **Status: experimental.** Pre-1.0 — the API may shift.

- ✨ Auto-imported `<{{ .ComponentName }} />` component
- 🟦 First-class TypeScript types
- 🎯 Nuxt 4 compatible

## Install

```bash
pnpm add {{ .PackageName }}
# or: npm install {{ .PackageName }}
# or: yarn add {{ .PackageName }}
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['{{ .PackageName }}'],
})
```

That's it — `<{{ .ComponentName }} />` now auto-imports in every Vue file.

## Module options

| Option   | Type     | Default | Description                                                       |
| -------- | -------- | ------- | ----------------------------------------------------------------- |
| `prefix` | `string` | `""`    | Component name prefix, e.g. `"Weburz"` → `<Weburz{{ .ComponentName }}>` |

Configure via the `{{ .ConfigKey }}` key in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['{{ .PackageName }}'],

  {{ .ConfigKey }}: {
    prefix: 'Weburz',
  },
})
```

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  pnpm install
  pnpm run dev:prepare   # generate Nuxt type stubs
  pnpm run dev           # run the playground
  pnpm run test
  pnpm run lint
  ```

</details>

<details>
  <summary>Pre-commit hooks</summary>

  This repo uses [pre-commit](https://pre-commit.com/) to enforce formatting,
  lint staged files, and validate commit messages (conventional-commits style,
  required by `changelogen` for the auto-generated [CHANGELOG](./CHANGELOG.md)).

  Install once per clone:

  ```bash
  # If you don't have pre-commit yet:
  brew install pre-commit          # macOS / Linuxbrew
  # or: pipx install pre-commit
  # or: pip install --user pre-commit

  # Activate the hooks in this repo:
  pnpm setup:hooks
  ```

  Skip hooks for a single commit with `git commit --no-verify` (use sparingly).

</details>

<details>
  <summary>Release flow</summary>

  Local one-liner that lints, tests, builds the module, bumps the version +
  CHANGELOG via `changelogen`, publishes to npm, and pushes the tag:

  ```bash
  pnpm release
  ```

  The `Deploy Playground` workflow publishes `playground/` to GitHub Pages on
  every push to `main`. Enable Pages in the repository settings and set
  **Source** to "GitHub Actions" to activate it.

</details>

## License

MIT &copy; [{{ .AuthorName }}](https://github.com/{{ .GitHubOwner }})

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/{{ .PackageName }}/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/{{ .PackageName }}

[npm-downloads-src]: https://img.shields.io/npm/dm/{{ .PackageName }}.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/{{ .PackageName }}

[license-src]: https://img.shields.io/npm/l/{{ .PackageName }}.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/{{ .PackageName }}

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
