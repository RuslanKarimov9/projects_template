import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-console": "error",
      "semi": "error",
    }
  },
  {
    // Для тестов
    files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  }
];