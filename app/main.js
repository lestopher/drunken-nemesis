define([
  'vertebrae/object',
  'jquery'
], function(EVIObject, jquery) {

  var App = EVIObject.extend({

    initialize: function(el) {
      this.$el = $(el);
    },

    start: function() {
      this.$el.get(0).innerHTML = 'Oh wait...i changed';
    }
  });

  return App;
});