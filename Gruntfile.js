module.exports = function(grunt) {

    grunt.initConfig({
        kss: {
            options: {
                includeType: 'scss',
                includePath: 'style/main.scss',
                template: 'template'
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
