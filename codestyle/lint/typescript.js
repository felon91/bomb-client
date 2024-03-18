module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          arrowFunctions: true,
        },
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],

        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': true,
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': true,
            'ts-check': true,
            minimumDescriptionLength: 3,
          },
        ],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'never'],

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error'],

        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'class',
            format: ['PascalCase'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            // custom: {
            //   regex: '^I[A-Z]',
            //   match: false,
            // },
          },
        ],

        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'jest/unbound-method': 'off',

        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',

        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
      },
    },
  ],
};
