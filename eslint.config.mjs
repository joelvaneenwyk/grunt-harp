
import js from "@eslint/js";
import globals from "globals";
//import airbnb from "eslint-config-airbnb-base";

export default [
    js.configs.recommended, // Recommended config applied to all files
    // Override the recommended config
    //...airbnb.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                //...globals.es6,
                ...globals.jquery,
                ...globals.node,
                // myCustomGlobal: "readonly"
            }
        },
        rules: {
            indent: ["error", 4],
            "no-unused-vars": "warn"
        }
        // ...other configuration
    },
];
