module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  ignorePatterns: ['node_modules'],
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    'import/resolver': 'webpack',
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    quotes: ['warn', 'single', 'avoid-escape'],
    'no-plusplus': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
  },
}
