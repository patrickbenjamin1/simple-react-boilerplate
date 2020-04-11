const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'prettier/@typescript-eslint', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    IntersectionObserver: true,
    MutationObserver: true,
  },
  rules: {
    // OFF

    // Typescript
    ['@typescript-eslint/interface-name-prefix']: off,
    ['@typescript-eslint/no-explicit-any']: off,
    ['@typescript-eslint/no-namespace']: off,
    ['@typescript-eslint/no-empty-interface']: off,
    ['@typescript-eslint/no-empty-function']: off,

    // Import
    ['import/extensions']: off,
    ['import/prefer-default-export']: off,
    ['import/no-unresolved']: off,

    // Generic
    ['no-empty-function']: off,
    ['class-methods-use-this']: off,
    ['no-inner-declarations']: off,
    ['no-await-in-loop']: off,
    ['no-useless-constructor']: off,
    ['max-classes-per-file']: off,
  },
  env: {
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: '16',
    },
  },
};
