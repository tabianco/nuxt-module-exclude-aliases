/* eslint-env node */
const path = require('path')

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'standard'
  ],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx'
      ],
      extends: [
        'standard-with-typescript'
      ],
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json')
      },
      rules: {
        '@typescript-eslint/no-dynamic-delete': 'off'
      }
    }
  ],
  root: true
}
