import { globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier/flat";

import turboConfig from "eslint-config-turbo/flat";

const eslintConfig = [
  globalIgnores(["dist", ".turbo", "node_modules", "eslint.config.mjs"]),
  ...turboConfig,
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
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
