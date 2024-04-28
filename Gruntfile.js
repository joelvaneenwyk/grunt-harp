/*
 * grunt-harp
 * https://github.com/joelvaneenwyk/grunt-harp
 * https://github.com/shovon/grunt-harp
 *
 * Copyright (c) 2024 Joel Van Eenwyk
 * Copyright (c) 2013 Salehen Shovon Rahman
 * Licensed under the MIT license.
 */

const gruntHarp = require("./tasks/harp");

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        eslint: {
            options: {
                overrideConfigFile: "eslint.config.mjs"
            },
            target: [
                "Gruntfile.js",
                "tasks/*.js",
                "test/*.js"
            ]
        },

        // Before generating any new files, remove any previously-created files.
        clean: [
            "tmp",
            "build"
        ],

        // Configuration to be run (and then tested).
        harp: {
            options: {
                source: "./test/example-site",
                dest: "build"
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ["test/*_test.js"]
        }

    });

    gruntHarp(grunt);

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask("test", ["eslint", "clean", "harp", "nodeunit"]);

    // By default, lint and run all tests.
    grunt.registerTask("default", ["clean", "harp", "eslint", "test"]);
};
