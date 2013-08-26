define([
  'vertebrae/view',
  'jquery',

  'app/base/helper',
], function(EVIView, $, helper) {

  var DashboardView = EVIView.extend({

    templates: {
      'dashboard.init': 'renderInitFragment'
    },

    render: function() {
      this.$el.html(this.renderInitFragment());
    },

    createElementAtTop: function() {
      var el = this.createElement();

      this.$('.widgetContainerTop').append(el);

      return el;
    },

    createElementAtLeft: function() {
      var el = this.createElement();

      this.$('.widgetContainerLeft').append(el);

      return el;
    },

    createElementAtRight: function() {
      var el = this.createElement();

      this.$('.widgetContainerRight').append(el);

      return el;
    },

    createElement: function() {
      return $('<div />');
    },

    closeWidgetView: function(widgetView) {
      var d = helper.deferred();

      widgetView.$el.slideUp(d.resolve);

      return d;
    }

  });

  return DashboardView;
});