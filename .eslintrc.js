module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['FormLabel'],
        labelAttributes: ['label'],
        controlComponents: ['input'],
        depth: 1,
      },
    ],
  },
}
