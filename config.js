require.config({
  baseUrl: './',
  paths: {
    jquery     : 'library/jquery/dist/jquery',
    backbone   : 'library/backbone/backbone',
    underscore : 'library/underscore/underscore',
    vertebrae  : 'library/vertebrae'
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    backbone: {
      exports: 'Backbone'
      deps: ['jquery', 'underscore']
    },
    underscore: {
      exports: '_'
    }
  }
});