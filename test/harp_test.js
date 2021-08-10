const grunt = require("grunt");
const gruntHarp = require("../tasks/grunt-harp");

exports.harp = {
    setUp(done) {
        // setup here if necessary
        done();
    },
    test_compile_harp(test) {
        const task = gruntHarp(grunt);
        test.notEqual(task, null);
        test.equal("function", typeof task.registerTask);
        test.done();
    }
};
