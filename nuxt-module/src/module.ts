import {
  addComponent,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * Component name prefix. Set to "" to disable the prefix.
   * @default ""
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '{{ .PackageName }}',
    configKey: '{{ .ConfigKey }}',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },

  defaults: {
    prefix: '',
  },

  setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: `${options.prefix ?? ''}{{ .ComponentName }}`,
      filePath: resolver.resolve('./runtime/components/{{ .ComponentName }}.vue'),
    })
  },
})
