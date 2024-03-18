module.exports = {
  extends: ['react-app'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'ignore',
        props: 'never',
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
    ],
  },
};
