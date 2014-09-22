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
                tasks: ['kss', 'copy:fonts'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            fonts: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        cwd: 'style/',
                        src: ['fonts/**'],
                        dest: 'styleguide/public/'
                    }
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('styleguide')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: 'style',
                    livereload: false
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-kss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // A very basic default task.
    grunt.registerTask('default', [
        'kss',
        'copy:fonts',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('pre', [
        'sass',
        'autoprefixer',
        'cssmin'
    ]);
};
