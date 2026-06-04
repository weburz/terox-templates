# Contributing to terox-templates

Thanks for the interest! This monorepo holds Weburz's official Terox templates. The goal of this guide is to get you from "fresh clone" to "open a PR with a new template" without reading the source.

## What you'll need

| Tool | Why | Install |
| --- | --- | --- |
| [Task](https://taskfile.dev) | Runs the contributor commands in `Taskfile.yml` | `brew install go-task/tap/go-task` |
| [Terox](https://github.com/Weburz/terox) | The scaffolder. We use it to render-check templates locally. | `brew install weburz/tap/terox` or `go install github.com/weburz/terox@latest` |
| [pre-commit](https://pre-commit.com) | Whitespace, YAML/JSON syntax, commit-msg linting | `brew install pre-commit` or `pipx install pre-commit` |

You don't need Node/pnpm for this repo itself — it's a pile of templates. The templates you author will pull in their own toolchains when scaffolded.

## Setup

```bash
git clone git@github.com:Weburz/terox-templates.git
cd terox-templates
task setup    # installs the pre-commit + commit-msg hooks
```

## Daily commands

```bash
task                       # show available tasks
task list                  # list every template + its description
task render -- <name>      # render one template to /tmp/terox-render/<name>
task render-all            # render every template; smoke-test for broken templates
task clean                 # delete /tmp/terox-render* caches
```

`task render-all` runs the same logic as the CI QA workflow — if it passes locally, CI will pass.

## Adding a new template

### 1. Decide the shape

Every template is a top-level directory with a `terox.json` manifest at its root and a tree of files below it. Mirror the structure of an existing template that's closest to what you're building:

- [`npm-package/`](./npm-package) — generic TS library scaffold
- [`nuxt-module/`](./nuxt-module) — Nuxt module with playground
- [`docs-site/`](./docs-site) — Nuxt Content + Nuxt UI docs

### 2. Write the manifest

`terox.json` declares the variables Terox will prompt for. Defaults should produce a **working scaffold** when the user just presses enter at every prompt.

```jsonc
{
  "name": "my-template",
  "description": "One-sentence pitch shown by 'task list' and the catalogue README.",
  "variables": [
    {
      "name": "PackageName",
      "prompt": "npm package name",
      "default": "@weburz/my-thing"
    },
    {
      "name": "License",
      "prompt": "License",
      "default": "MIT",
      "choices": ["MIT", "Apache-2.0", "GPL-3.0"]
    },
    {
      "name": "UseTypeScript",
      "prompt": "Use TypeScript?",
      "type": "bool",
      "default": "true"
    }
  ]
}
```

Variable types:

| Field | Effect |
| --- | --- |
| `default` | Pressing enter accepts this value. Required when running with `--non-interactive`. |
| `choices` | Renders a select prompt. The first choice is the default if `default` is empty. |
| `type: bool` | Renders a yes/no confirm. Default must be `"true"` or `"false"` (string). |
| (none) | Free-form text input. |

We use **PascalCase** variable names by convention (matches the existing templates).

### 3. Write the files

Drop the project files under your new template directory. Terox renders every file (and every filename) through Go's [`text/template`](https://pkg.go.dev/text/template) engine.

**Variable references:**

```ts
// package.json
{ "name": "{{ .PackageName }}" }
```

**Conditional files** (rendered name evaluates to empty → file is skipped entirely):

```
{{ if eq .UseTypeScript "true" }}tsconfig.json{{ end }}
```

**Dynamic file names** — Terox renames as it copies. Useful when the component/module name should drive the filename:

```
src/components/{{ .ComponentName }}.vue
```

### 4. Watch out for `{{` collisions

Some file formats use `{{ }}` natively, which collides with Go templates. **Escape every literal `{{` as `{{ "{{" }}`** in those files.

| File format | What needs escaping | After escape |
| --- | --- | --- |
| GitHub Actions YAML | `${{ secrets.X }}` | `${{ "{{" }} secrets.X }}` |
| Vue templates | `{{ message }}` | `{{ "{{" }} message }}` |
| Helm charts | `{{ .Release.Name }}` | `{{ "{{" }} .Release.Name }}` |

Without the escape, Go's template parser tries to evaluate the expression inside, fails, and your `terox scaffold` invocation errors. **No escape is needed for `${...}` JS template literals** — those don't trigger Go's parser.

Files with **no `{{` anywhere** are short-circuited and copied byte-for-byte. Binary files (NUL byte in the first 8KB) are also copied unrendered.

### 5. Render-check locally

```bash
task render -- my-template
```

Inspect the output under `/tmp/terox-render/my-template/`. Pay extra attention to:

- Any file you escaped `{{` in — confirm the result looks correct.
- Files whose **names** contain variables — confirm they were renamed.
- The manifest itself (`terox.json`) — should **not** appear in the output (Terox strips it automatically).

When iterating, `task render -- my-template` is idempotent (it wipes the previous render first).

### 6. Wire up the monorepo bookkeeping

Three places need updating when you add a new template:

1. **Root [`README.md`](./README.md)** — add a row to the **Templates** table.
2. **Root [`.pre-commit-config.yaml`](./.pre-commit-config.yaml)** — append the new directory name to the `exclude:` pattern on `check-yaml` and `check-json`. Template files contain pre-render Go template syntax that isn't valid YAML/JSON.
3. **No Taskfile change needed** — `task list` and `task render-all` auto-discover any directory containing a `terox.json`.

### 7. Verify everything still passes

```bash
task render-all          # confirms every template renders cleanly
pre-commit run --all-files
```

## Commit messages and PRs

We use [Conventional Commits](https://www.conventionalcommits.org) enforced via the [`crisp`](https://github.com/Weburz/crisp) hook on `commit-msg`.

```
feat: add docs-site template
fix(npm-package): correct provenance flag in publish workflow
chore(deps): bump actions/checkout to v6.0.3
docs: clarify the {{ }} escape rules
```

**Other conventions:**

- Branch off `main` for every change. The `no-commit-to-branch` hook blocks direct commits to `main`.
- Keep PRs scoped to one logical change (one template, one bug fix, one tooling tweak). The catalogue grows by accretion, not by big-bang PRs.
- The CI [QA workflow](./.github/workflows/qa.yml) runs `terox scaffold` on every template with default vars. If it fails for your PR, the most common cause is unescaped `{{` somewhere — `task render -- <your-template>` locally to reproduce.

## Style

- `.editorconfig` controls indentation (2 spaces, LF) — your editor should pick it up automatically.
- The Weburz house style for any JavaScript/TypeScript content **inside** templates: arrow functions only (`const fn = () => …`), single quotes, no semicolons, trailing commas. The starter templates already follow this — match what's there when adding new files.

## Questions?

Open a [discussion](https://github.com/Weburz/terox-templates/discussions) or file an issue. For Terox-CLI behavior (the engine that runs these templates), the source of truth is [Weburz/terox](https://github.com/Weburz/terox).
