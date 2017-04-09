"use strict";

module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'app/src/**/*.js', 'test/**/*.js']
    },
    concat: {
        // 2. la configuration pour la concaténation va ici.
        dist: {
            src: [
                'app/src/**/*.js', // tous les JS dans libs
                'app/app.js'  // ce fichier là
            ],
            dest: 'app/build/production.js'
        }
    },
    uglify: {
      build: {
          src: 'app/build/production.js',
          dest: 'app/build/production.min.js'
      }
    },
    /*sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: [{
              expand: true,
              cwd: 'styles',
              src: ['*.scss'],
              dest: 'app/build',
              ext: '.css'
            }]
        }
    },*/
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['app/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        }
      },
      /*css: {
        files: ['app/assets/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
      }*/
    }
  });

  //grunt.registerTask('watch', ['watch']);
  grunt.registerTask('default', ['jshint','concat', 'uglify']);
  //grunt.registerTask('sass', ['sass']);

};
