import reactConfig from '@diditui/eslint-config/react.js';

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactConfig,
  {
    ignores: ['eslint.config.js'],
  }
];
