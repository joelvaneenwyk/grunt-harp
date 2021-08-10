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
    grunt.registerTask(
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
            } else {
                harp.compile(source, dest, function (err) {
                    if (err) {
                        grunt.fail.fatal(err.message);
                    }
                    grunt.log.writeln("Site successfully compiled!");
                    done();
                });
            }
        }
    );
};
