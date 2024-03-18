module.exports = {
  root: false,
  extends: [
    './codestyle/lint/prettier',
    './codestyle/lint/initial',
    './codestyle/lint/typescript',
    './codestyle/lint/import',
    './codestyle/lint/react',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/prefer-top-level-await': 'off',
  },
};
