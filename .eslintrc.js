module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'prettier', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 'react/jsx-uses-react': 'error',
  },
}
