# @tabianco/nuxt-module-exclude-aliases

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@tabianco/nuxt-module-exclude-aliases)](https://npmjs.com/package/@tabianco/nuxt-module-exclude-aliases)
[![npm](https://flat.badgen.net/npm/dt/@tabianco/nuxt-module-exclude-aliases)](https://npmjs.com/package/@tabianco/nuxt-module-exclude-aliases)

Nuxt3 module to exclude specified aliases from alias config.

_Note: this library works only with Nuxt3_

## Usage

1. Add this package to your dependencies

```bash
$ npm i -D @tabianco/nuxt-module-exclude-aliases
# or
$ yarn add -D @tabianco/nuxt-module-exclude-aliases
```

2. Use in your `nuxt.config.*` file

```javascript:nuxt.config.js
export default defineNuxtConfig({
  modules: [
    '@tabianco/nuxt-module-exclude-aliases'
  ],
  excludeAliases: {
    alias: [
      '@',
      '@@'
    ]
  }
})
```

## License

MIT - Tabian Co.
