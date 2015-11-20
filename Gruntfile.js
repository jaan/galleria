module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'src/galleria.min.js': ['src/galleria.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
    grunt.registerTask('default', ['uglify']); // Default grunt tasks maps to grunt
};
