import storybookConfig from '@diditui/eslint-config/storybook.js';

/** @type {import("eslint").Linter.Config} */
export default [
  ...storybookConfig,
  {
    ignores: ['storybook-static/**'],
  }
];
