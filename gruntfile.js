module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            build: {
                options : {
                    style : 'compressed'
                },
                files: {
                    'assets/css/app.min.css': 'assets/_sass/app.scss'
                }
            }
        },
        jshint: {
            files: ['assets/js/**/*.js'],
            options: {
                globals: {
                  jQuery: true
                }
            }
        },
        uglify : {
            my_target: {
                files: {
                    'assets/js/app.min.js' : 'assets/js/app.js'
                }
            }
        },
        watch: {
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['jshint', 'uglify']
            },
            sass: {
                files: ['assets/_sass/**/*.{scss,sass}'],
                tasks: ['sass']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'uglify']);

};
