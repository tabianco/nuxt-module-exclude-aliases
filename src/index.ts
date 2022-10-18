import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'exclude-aliases',

    // The key in `nuxt.config` that holds your module options
    configKey: 'excludeAliases',

    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0-0'
    }
  },

  // Default configuration options
  defaults: {
    alias: [] as Array<string | RegExp>
  },

  setup (moduleOptions, nuxt) {
    const alias = nuxt.options.alias

    moduleOptions.alias.forEach((item) => {
      for (const key in alias) {
        if (key === item || Boolean(key.match(item))) {
          delete alias[key]
        }
      }
    })
  }
})
