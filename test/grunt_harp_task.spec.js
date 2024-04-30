const grunt = require("grunt");
const gruntHarpTask = require("../src/grunt_harp_task");

describe('grunt harp task', () => {
    it('validate', () => {
        const task = gruntHarpTask(grunt);
        expect(task).not.toBeNull();
        expect(typeof task.registerTask).toBe("function");
    });
});
