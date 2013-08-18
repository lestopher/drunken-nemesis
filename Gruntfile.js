module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001
        }
      }
    },
    less: {
      dev: {
        files: {
          'css/main.css': 'app/styles/main.less'
        }
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['connect:server:keepalive']);
};