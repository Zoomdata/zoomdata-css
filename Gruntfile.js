module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'nested' //sass sucks at minification, don't use it.
            },
            dist: {
                files: {
                    'style/main.css': 'style/main.scss'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'style/main.css': ['style/main.css']
                }
            }
        },
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
        },
        autoprefixer: {
            dist: {
                files: {
                    'style/main.css': 'style/main.css'
                }
            }
        },
        watch: {
            kss: {
                files: ['style/**/*.scss', 'style/styleguide.md'],
                tasks: ['kss']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-kss');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // A very basic default task.
    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('pre', [
        'sass',
        'autoprefixer',
        'cssmin'
    ]);
};
