/*
 * grunt-harp
 *
 * https://github.com/joelvaneenwyk/grunt-harp
 * https://github.com/shovon/grunt-harp
 *
 * Copyright (c) 2024 Joel Van Eenwyk
 * Copyright (c) 2013 Salehen Shovon Rahman
 * Licensed under the MIT license.
 */

const gruntHarp = require('./src/grunt_harp_task.js');

/**
 *
 * @param {import('grunt')} grunt
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        eslint: {
            options: {
                overrideConfigFile: 'eslint.config.mjs'
            },
            target: ['Gruntfile.js', 'src/*.js', 'test/*.spec.js']
        },

        // Before generating any new files, remove any previously-created files.
        clean: ['tmp/', '.build/', 'build/'],

        // Configuration to be run (and then tested).
        harp: {
            options: {
                source: 'test/example-site/',
                dest: '.build/'
            }
        },

        run: {
            options: {
                // Task-specific options go here.
            },
            harp_test: {
                cmd: 'npm',
                args: ['run', 'test']
            }
        }
    });

    gruntHarp(grunt);

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-run');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['run:harp_test', 'clean', 'harp', 'run']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['clean', 'harp', 'eslint', 'test']);
};
