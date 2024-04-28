/**
 * grunt-harp | ESLint configuration
 */

import js from "@eslint/js";
import globals from "globals";

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
            // enable additional rules
            "indent": [
                "error",
                4
            ],
            "linebreak-style": "off",
            "func-names": "off",
            "max-len": [
                "error",
                {
                    "code": 120
                }
            ],
            "quotes": [
                "error",
                "double"
            ],
            "semi": [
                "error",
                "always"
            ],
            "arrow-body-style": [
                "error",
                "as-needed"
            ],
            "prefer-arrow-callback": "off",
            // override default options for rules from base configurations
            "no-cond-assign": [
                "error",
                "always"
            ],
            "comma-dangle": [
                "error",
                {
                    "arrays": "never",
                    "objects": "never",
                    "imports": "never",
                    "exports": "never",
                    "functions": "never"
                }
            ],
            // disable rules from base configurations
            "no-console": "off"
        }
    }
];
