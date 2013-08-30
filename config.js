require.config({
  baseUrl: './',
  map: {
    '*': {
      'handlebars': 'handlebars.runtime',
      'vertebrae' : 'evisions'
    }
  },
  paths: {
    jquery               : 'library/jquery/dist/jquery',
    jqueryui             : 'library/jqueryui/jqueryui',
    backbone             : 'library/backbone/backbone',
    underscore           : 'library/underscore/underscore',
    vertebrae            : 'library/vertebrae',
    evisions             : 'library/vertebrae',
    bootstrap            : 'library/bootstrap/dist/js/bootstrap',
    'handlebars.runtime' : 'library/handlebars/dist/handlebars.runtime'
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    jqueryui: {
      deps: ['jquery']
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    underscore: {
      exports: '_'
    },
    'handlebars.runtime': {
      exports: 'Handlebars'
    }
  }
});