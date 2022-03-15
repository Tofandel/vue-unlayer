module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'vue/max-len': ['error', { code: 160, ignoreRegExpLiterals: true, ignoreTemplateLiterals: true, ignoreHTMLAttributeValues: true, ignoreStrings: true, ignoreComments: true }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': false,
      ignores: ['svg:style'],
    }],
    'import/order': ['warn', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    }],
    'vue/singleline-html-element-content-newline': ['warn', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['span', 'pre', 'textarea', 'q-btn', 'q-icon', 'InertiaLink'],
    }],
    'vue/require-default-prop': 'off',
    'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-empty': ['error'],
    'no-unreachable': ['error'],
    'no-undefined': 'off',
    curly: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'new-cap': 'off',
  },
};
