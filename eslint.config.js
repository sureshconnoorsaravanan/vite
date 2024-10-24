import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { ignores: ['dist'] }, // Specify directories to ignore
  {
    files: ["{js,jsx,ts,tsx}"], // Main file types to lint
    languageOptions: {
      globals: {
        ...globals.browser,
        IS_REACT_ACT_ENVIRONMENT: "readonly",
        __REACT_DEVTOOLS_GLOBAL_HOOK__: "readonly",
        global: "readonly",
        setImmediate: "readonly",
        process: "readonly",
        Buffer: "readonly",
        WorkerGlobalScope: "readonly",
      },
      parser: tseslint.ESLintParser, // Specify the TypeScript parser
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
    },
    // Custom rules should be included here
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off', // Allow unused expressions
      'no-empty': 'off', // Disable no-empty rule
      '@typescript-eslint/no-this-alias': 'off', // Allow 'this' aliasing
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow unused args to start with '_'
      'no-cond-assign': 'error', // Ensure proper use of conditionals
      'no-unreachable': 'error', // Ensure there is no unreachable code
      'no-constant-condition': 'error', // Ensure conditions are not constant
      'react/react-in-jsx-scope': 'off', // Disable rule for React 17+
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
      // Add more custom rules here as needed
    },
  },
  // ESLint recommended configurations
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
