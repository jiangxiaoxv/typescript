module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/ban-types': 'off',
    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-case-declarations': 0,
  },
}
