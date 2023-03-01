module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'next/core-web-vitals', 'plugin:@next/next/recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/eslint-recommended', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    // 意図的な強制もありうるためoffにする
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    // alphabet順にimportをソート
    'sort-imports': 0,
    'import/order': [2, {
      alphabetize: {
        order: 'asc'
      }
    }],
    // Reactのimportを強制しない
    'react/react-in-jsx-scope': 'off',
    // 使ってない変数/importは自動削除する
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_'
    }],
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};