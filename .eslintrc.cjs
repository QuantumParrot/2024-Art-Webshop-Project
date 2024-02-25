/* eslint-env node */

module.exports = {

  root: true,

  extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'airbnb-base',
  ],
  
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.js', 'plugin.js'],

  rules: {
      'indent': ['error', 4],
      'padded-blocks': ['error', 'always', { allowSingleLineBlocks: true }],
  },

  parserOptions: {
      ecmaVersion: 'latest',
  },

  settings: {
      'import/resolver': {
          alias: {
              map: [
                  ['@', './src'],
              ],
              extensions: ['.js', '.vue'],
          },
      },
      'import/core-modules': [
          'vite',
          '@vitejs/plugin-vue',
      ],
  },

};
