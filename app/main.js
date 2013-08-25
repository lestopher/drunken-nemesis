define([
  'vertebrae/object',
  'app/base/helper',
  'jquery'
], function(EVIObject, helper, $) {

  var App = EVIObject.extend({

    initialize: function(el) {
      this.$el = $(el);
    },

    start: function() {
      this.$el.get(0).innerHTML = helper.template('init');
    }
  });

  return App;
});
