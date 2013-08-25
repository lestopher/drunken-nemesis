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
    backbone             : 'library/backbone/backbone',
    underscore           : 'library/underscore/underscore',
    vertebrae            : 'library/vertebrae',
    evisions             : 'library/vertebrae',
    'handlebars.runtime' : 'library/handlebars/dist/handlebars.runtime'
  },
  shim: {
    jquery: {
      exports: 'jQuery'
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