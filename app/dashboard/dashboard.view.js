define([
  'vertebrae/view',
  'jquery',

  'app/base/helper',
  // jQuery UI is not AMD but adds sortable
  'jqueryui'
], function(EVIView, $, helper) {

  var DashboardView = EVIView.extend({

    templates: {
      'dashboard.init': 'renderInitFragment'
    },

    render: function() {
      this.$el.html(this.renderInitFragment());

      this.setupSortable();
    },
    
    setupSortable: function() {
      var leftContainer  = this.$('.widgetContainerLeft'),
          rightContainer = this.$('.widgetContainerRight');

      leftContainer.sortable({
        // connectWith: rightContainer,
        connectWith: '.widgetContainerRight',
        items: '> .dashboardWidget',
        handle: '.widgetHeader'
      });

      rightContainer.sortable({
        // connectWith: leftContainer,
        connectWith: '.widgetContainerLeft',
        items: '> .dashboardWidget',
        handle: '.widgetHeader'
      });

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