/**
 * grunt-harp | ESLint configuration
 */

import js from "@eslint/js";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.jquery,
                ...globals.node
            }
        },
        rules: {
            "func-names": "off",
            "arrow-body-style": [
                "error",
                "as-needed"
            ],
            "prefer-arrow-callback": "off",
            "no-cond-assign": [
                "error",
                "always"
            ],
            "no-console": "off"
        }
    }
];
