define([
  'vertebrae/object',
  'jquery'
], function(EVIObject, $) {

  var App = EVIObject.extend({

    initialize: function(el) {
      this.$el = $(el);
    },

    start: function() {
      this.$el.get(0).innerHTML = 'App has started';
    }
  });

  return App;
});