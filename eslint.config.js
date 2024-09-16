// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "never", "prev": "*", "next": "*" },
        { "blankLine": "always", "prev": "function", "next": "function" },
        { "blankLine": "always", "prev": "block-like", "next": "return" },
        { "blankLine": "never", "prev": "import", "next": "import" },
        { "blankLine": "always", "prev": "directive", "next": "block" },
        { "blankLine": "always", "prev": "block", "next": "block" }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "default",
          "format": ["camelCase"]
        },
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "function",
          "format": ["camelCase"]
        },
        {
          "selector": "parameter",
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "class",
          "format": ["PascalCase"]
        },
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": true
          }
        },
        {
          "selector": "enum",
          "format": ["PascalCase"]
        },
        {
          "selector": "typeAlias",
          "format": ["PascalCase"]
        },
        {
          "selector": "property",
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "method",
          "format": ["camelCase"]
        },
        {
          "selector": "enumMember",
          "format": ["UPPER_CASE"]
        }
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
