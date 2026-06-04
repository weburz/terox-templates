# {{ .PackageName }}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

{{ .PackageDescription }}

## Install

```bash
pnpm add {{ .PackageName }}
# or: npm install {{ .PackageName }}
# or: yarn add {{ .PackageName }}
```

## Usage

```ts
import { greet } from '{{ .PackageName }}'

console.log(greet('world'))
// Hello, world!
```

## API

| Export    | Signature                       | Description                       |
| --------- | ------------------------------- | --------------------------------- |
| `greet`   | `(name: string) => string`      | Returns a friendly greeting.      |

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  pnpm install
  pnpm build      # bundle with unbuild
  pnpm test       # run vitest
  pnpm lint       # eslint
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

  Local one-liner that lints, tests, builds, bumps the version + CHANGELOG via
  `changelogen`, publishes to npm, and pushes the tag:

  ```bash
  pnpm release
  ```

  CI also publishes automatically when a tag matching `v*` is pushed (see
  `.github/workflows/publish.yml`). Configure the `NPM_TOKEN` repository secret
  before relying on the CI flow.

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
