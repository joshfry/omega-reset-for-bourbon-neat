module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    bower: grunt.file.readJSON('.bowerrc'),
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      options: {
        port: 8000,
      },
      server: {
        options: {
          base: 'dist/'
        }
      }
    },

    watch: {
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy:html']
      },
      scss: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'dist/**/*.html',
          'dist/assets/css/{,*/}*.css'
        ]
      }
    },

    sass: {
      build: {
        files : [
          {
            'dist/assets/css/style.css': 'src/scss/style.scss'
          }
        ],
        options : {
          style : 'expanded'
          // debugInfo: true
        }
      }
    },

    clean: {
      dist: ['dist'],
      build: ['src/scss/mixins/_omega-reset.scss']
    },

    copy: {
      bower: {
        files: [
          {
            expand: true,
            cwd: '<%= bower.directory %>',
            src: ['**/*'],
            dest: 'dist/assets/bower'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.html'],
            dest: 'dist'
          }
        ]
      },
      omegaReset: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'src',
            src: ['scss/mixins/_omega-reset.scss'],
            dest: 'dist'
          }
        ]
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['clean:dist', 'copy:bower', 'copy:html', 'sass']);
  grunt.registerTask('build',   ['clean:dist', 'copy:omegaReset']);

  // Main tasks
  grunt.registerTask('dev',     ['default', 'w']);

  // Watch tasks
  grunt.registerTask('w',       ['connect:server', 'watch']);

  // Plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
