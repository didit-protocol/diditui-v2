import reactConfig from '@diditui/eslint-config/react.js';

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactConfig,
  {
    ignores: ['build.mjs', 'rollup.config.mjs', 'src/icons-list.ts', 'src/dynamic-imports.ts'],
  }
];
