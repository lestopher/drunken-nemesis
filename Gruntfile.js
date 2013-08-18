module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [
               require('connect-livereload')(),
              // Serve static files.
              connect.static(options.base),
              // Make empty directories browsable.
              connect.directory(options.base),
            ];
          }
        }
      }
    },
    less: {
      dev: {
        files: {
          'css/main.css': 'app/styles/main.less'
        }
      }
    },
    jshint: {
      all: ['app/**/*.js']
    },
    watch: {
      less: {
        files: 'app/**/*.less',
        tasks: ['less:dev'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: 'app/**/*.js',
        tasks: ['jshint:all'],
        options: {
          livereload: true
        }
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint:all', 'less:dev', 'connect:server', 'watch']);
};