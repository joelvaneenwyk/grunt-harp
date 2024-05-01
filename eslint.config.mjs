/**
 * grunt-harp | ESLint configuration
 */

import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['src/**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.jquery,
                ...globals.node,
            },
        },
        rules: {
            'func-names': 'off',
            'arrow-body-style': ['error', 'as-needed'],
            'prefer-arrow-callback': 'off',
            // override default options for rules from base configurations
            'no-cond-assign': ['error', 'always'],
            // disable rules from base configurations
            'no-console': 'off',
        },
    },
    {
        files: ['*.js'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.jquery,
                ...globals.node,
            },
        },
        rules: {
            'func-names': 'off',
            'arrow-body-style': ['error', 'as-needed'],
            'prefer-arrow-callback': 'off',
            // override default options for rules from base configurations
            'no-cond-assign': ['error', 'always'],
            // disable rules from base configurations
            'no-console': 'off',
        },
    },
    // Test files
    {
        files: ['test/**/*.spec.js'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.jquery,
                ...globals.node,
                ...globals.jest
            },
        },
        plugins: {
            jest
        },
        rules: {
            ...jest.configs.recommended.rules
        }
    },
    prettier
];
