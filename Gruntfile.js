var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt) {

  grunt.initConfig({
    config: {
      server: {
        port: 9292,
        host: 'localhost'
      },
      client: {
        port: 9001
      }
    },
    connect: {
      server: {
        options: {
          port: "<%= config.client.port %>",
          middleware: function(connect, options) {
            return [
              proxySnippet,
              require('connect-livereload')(),
              // Serve static files.
              connect.static(options.base),
              // Make empty directories browsable.
              connect.directory(options.base),
            ];
          }
        }
      },
      proxies: [
        {
            context: '/person',
            host: '<%= config.server.host %>',
            port: '<%= config.server.port %>',
            https: false,
            changeOrigin: false
        }
      ]
    },
    less: {
      dev: {
        files: {
          'css/main.css': 'app/styles/main.less'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'config.js', 'app/**/*.js']
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
    },
    exec: {
      setup_submodules: {
        cmd: 'git submodule update --init --recursive'
      },
      build_jquery: {
        cmd: 'cd library && cd jquery && npm install && grunt',
        stdout: false,
        stderr: false
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint:all', 'less:dev', 'configureProxies', 'connect:server', 'watch']);

  grunt.registerTask('setup', ['exec:setup_submodules', 'exec:build_jquery']);

};