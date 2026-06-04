import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

describe('{{ .PackageName }}', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the auto-imported <{{ .ComponentName }}>', async () => {
    const html = await $fetch('/')
    expect(html).toContain('weburz-module-component')
  })
})
