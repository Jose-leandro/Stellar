module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'next/core-web-vitals',
    'plugin:boundaries/recommended',
  ],
  plugins: [
    'react',
    'prettier',
    'boundaries'
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'boundaries/elements': [
      { type: 'domain', pattern: 'src/domain/*' },
      { type: 'application', pattern: 'src/application/*' },
      { type: 'infrastructure', pattern: 'src/infrastructure/*' },
      { type: 'presentation', pattern: 'src/presentation/*' },
      { type: 'shared', pattern: 'src/shared/*' },
    ],
  },
  rules: {
    'prettier/prettier': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',

    'boundaries/element-types': [2, {
      default: 'disallow',
      rules: [
        { from: 'presentation', allow: ['application', 'shared'] },
        { from: 'application', allow: ['domain', 'shared'] },
        { from: 'domain', allow: ['shared'] },
        { from: 'infrastructure', allow: ['application', 'shared'] },
        { from: 'shared', allow: [] },
      ]
    }]
  }
};

