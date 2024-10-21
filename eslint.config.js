import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'
import storybookPlugin from 'eslint-plugin-storybook'
import { fixupPluginRules } from '@eslint/compat'

import js from '@eslint/js'

/** @type{import('eslint').Linter.FlatConfig[]}  */

export default [
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      perfectionist: perfectionistPlugin,
      storybook: fixupPluginRules(storybookPlugin),
    },
  },
  { ignores: ['dist', 'eslint.config.js', 'src/assets/icons/components'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    rules: {
      'arrow-parens': 'off',
      'consistent-return': 'off',
      curly: ['error', 'all'],
      'import/extensions': [
        'error',
        { css: 'always', json: 'always', scss: 'always', svg: 'always' },
      ],
      'import/no-duplicates': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
      'max-lines': ['error', 300],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'off',
      'no-duplicate-imports': 'error',
      'no-empty-pattern': 'off',
      'no-nested-ternary': 'error',
      'no-undef': 'warn',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: 'react',
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'type',
            'react',
            'builtin',
            'external',
            'internal-type',
            'internal',
            'side-effect',
            'style',
          ],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],
      'prefer-const': 'error',
      'react/button-has-type': 'error',
      'react/display-name': 'off',
      'react/jsx-boolean-value': ['error'],
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'ignore', propElementValues: 'always', props: 'always' },
      ],
      'react/jsx-fragments': ['error'],
      'react/prop-types': 'off',
      'react/void-dom-elements-no-children': ['error'],
    },
  },
  // Оверрайды для Storybook файлов
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'import/no-anonymous-default-export': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'no-console': 'off',
    },
  },
  // Оверрайды для конфигурационных файлов Storybook
  {
    files: ['.storybook/main.@(js|cjs|mjs|ts)'],
    rules: {
      'storybook/no-uninstalled-addons': 'error',
    },
  },
]
