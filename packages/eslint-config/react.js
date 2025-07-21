import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";

import turboConfig from "eslint-config-turbo/flat";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  globalIgnores(["dist", ".turbo", "node_modules", "eslint.config.mjs"]),
  ...turboConfig,
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
  {
    rules: {
      "turbo/no-undeclared-env-vars": [
        "error",
        {
          allowList: ["^ENV_[A-Z]+$"],
        },
      ],
      "no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
