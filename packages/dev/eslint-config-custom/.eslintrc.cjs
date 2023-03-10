module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-space-before-closing': 'error',
  },
}
