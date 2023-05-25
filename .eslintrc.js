module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/component-definition-name-casing': 'off',
    'no-extend-native': 'off',
    'object-shorthand': 'off'
  }
}
