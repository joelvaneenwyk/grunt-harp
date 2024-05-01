/*
 * grunt-harp
 * https://github.com/joelvaneenwyk/grunt-harp
 * https://github.com/shovon/grunt-harp
 *
 * Copyright (c) 2024 Joel Van Eenwyk
 * Copyright (c) 2013 Salehen Shovon Rahman
 * Licensed under the MIT license.
 */

const grunt = require('grunt');
// @ts-ignore
const harp = require('harp');
const path = require('path');

/**
 * @param {grunt.task.ITask} instance
 * @returns {void}
 */
function task(instance) {
    // Merge task-specific and/or target-specific options with these defaults.
    const done = instance.async();

    const defaults = {
        server: false,
        port: 9000,
        source: './',
        dest: '.build/'
    };

    // @ts-ignore - type definitions do not have 'this.data' so we ignore the warning.
    const options = instance.options(defaults, instance.data);
    const source = path.resolve(options.source);
    const dest = path.resolve(options.dest);

    if (options.server) {
        harp.server(source, { port: options.port }, function () {
            console.log('Harp server running on port %d', options.port);
        });
        done();
    } else {
        grunt.log.writeln("Initiated 'harp' site compile.");

        try {
            harp.compile(source, dest, function (/** @type {any} */ err) {
                if (err) {
                    grunt.fail.fatal(err);
                    done(err);
                }

                grunt.log.writeln('Site successfully compiled!');

                done();
            });

            setTimeout(function () {
                grunt.log.writeln('All done!');
                done();
            }, 1000);
        } catch (error) {
            done();
            grunt.log.writeln(`Failed to compile site. ${error}`);
        }
    }
}

/**
 *
 * @param {typeof grunt?} gruntOverride
 * @returns {typeof grunt}
 */
module.exports = function main(gruntOverride = null) {
    let gruntInstance = gruntOverride || grunt;
    gruntInstance.registerTask(
        'harp',
        'A grunt task for either running a Harp server, or compile your site using harp.',
        task
    );
    return gruntInstance;
};
