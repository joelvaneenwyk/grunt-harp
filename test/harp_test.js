const grunt = require("grunt");

exports.harp = {
    setUp(done) {
        // setup here if necessary
        done();
    },
    some_test(test) {
        // ... run your test here.
        // Actually load this plugin's task(s).
        grunt.loadTasks("tasks");

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks("grunt-eslint");
        grunt.loadNpmTasks("grunt-contrib-clean");
        grunt.loadNpmTasks("grunt-contrib-nodeunit");

        // Whenever the "test" task is run, first clean the "tmp" dir, then run this
        // plugin's task(s), then test the result.
        grunt.registerTask("test", ["clean", "harp", "nodeunit"]);

        // By default, lint and run all tests.
        grunt.registerTask("default", ["eslint", "test"]);

        test.done();
    }
};
