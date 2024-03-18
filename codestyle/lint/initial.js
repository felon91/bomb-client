module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:json/recommended-with-comments',
    'plugin:unicorn/recommended',
  ],
  plugins: ['unicorn'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    // allow console.error & console.warning
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // always use brackets after if's
    curly: 'error',

    // omit useless function brackets
    'arrow-body-style': ['error', 'as-needed'],

    'no-else-return': ['error', { allowElseIf: false }],
    'newline-after-var': ['error', 'always'],
    'no-useless-return': 'error',

    // unicorn
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-null': 'off',
  },
};
