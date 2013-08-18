define([
  'vertebrae/object',
  'jquery'
], function(EVIObject, jquery) {

  var App = EVIObject.extend({

    initialize: function(el) {
      this.$el = $(el);
    },

    start: function() {
      this.$el.get(0).innerHTML = 'Hello world!!!';
    }
  });

  return App
});