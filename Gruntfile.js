module.exports = function (grunt) {

    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'style/styles.css': ['./style/styles.css']
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    './style/styles.css': './style/styles.css'
                }
            }
        },
        mixdoc: {
            def: {
                options: {
                    styles_folder: './style/objects',
                    dest_folder: './dest',
                }
            }
        },  
        watch: {
            tasks: ['mixdoc', 'copy', 'cssmin', /*'connect:livereload'*/],
            files: ['*', './style/objects/**/*.scss']
        },
        copy: {
            fonts: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        cwd: 'style/',
                        src: ['fonts/**'],
                        dest: 'dest'
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
                    middleware: function (connect) {
                        return [
                            connect.static('dest')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: 'style',
                    livereload: true
                }
            }
        },
        'gh-pages': {
            options: {
                base: 'dest'
            },
            src: ['**']
        }
    });

    grunt.loadNpmTasks('grunt-mixdoc');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // A very basic default task.
    grunt.registerTask('default', [
        'mixdoc',
        'cssmin',
        'copy:fonts',
        //'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('deploy', [
        'mixdoc',
        'copy:fonts',
        'gh-pages'
    ]);

    /*grunt.registerTask('pre', [
     'sass',
     'autoprefixer',
     'cssmin'
     ]);*/
};
