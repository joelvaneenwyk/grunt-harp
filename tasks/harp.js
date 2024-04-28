/*
 * grunt-harp
 * https://github.com/shovon/grunt-harp
 *
 * Copyright (c) 2013 Salehen Shovon Rahman
 * Licensed under the MIT license.
 */

const harp = require("harp");
const path = require("path");

module.exports = function (grunt) {
    return grunt.registerTask(
        "harp",
        "A grunt task for either running a Harp server, or compile your site using harp.",
        function () {
            // Merge task-specific and/or target-specific options with these defaults.
            const done = this.async();

            const defaults = {
                server: false,
                port: 9000,
                source: "./",
                dest: "build"
            };

            const options = this.options(defaults, this.data);
            const source = path.resolve(options.source);
            const dest = path.resolve(options.dest);

            if (options.server) {
                harp.server(source, { port: options.port }, function () {
                    console.log("Harp server running on port %d", options.port);
                });
                done();
            } else {
                grunt.log.writeln("Initiated 'harp' site compile.");

                try {
                    harp.compile(source, dest, function (err) {
                        if (err) {
                            grunt.fail.fatal(err);
                            done(err);
                        }

                        grunt.log.writeln("Site successfully compiled!");

                        done();
                    });

                    setTimeout(function () {
                        grunt.log.writeln("All done!");
                        done();
                    }, 1000);
                } catch (error) {
                    done();
                    grunt.log.writeln(`Failed to compile site. ${error}`);
                }
            }
        }
    );
};
