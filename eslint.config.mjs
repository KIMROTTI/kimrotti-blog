import eslint from "@eslint/js";
import * as mdx from "eslint-plugin-mdx";
import * as react from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";

export default [
  eslint.configs.recommended,
  {
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "no-unused-vars": "off",
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  ...tailwind.configs["flat/recommended"],
];
