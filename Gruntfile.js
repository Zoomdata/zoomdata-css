module.exports = function(grunt) {

    grunt.initConfig({
        kss: {
            options: {
                includeType: 'scss',
                includePath: 'style/main.scss',
            },
            dist: {
                files: {
                    'styleguide': ['style']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-kss');

    // A very basic default task.
    grunt.registerTask('default', [
        'kss'
    ]);
};
