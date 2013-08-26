define([
  'vertebrae/controller',

  'app/dashboard/widgets/abstract.widget.view'
], function(EVIController, AbstractWidgetView) {

  var AbstractWidgetController = EVIController.extend({

    properties: [
      'DashboardController',
      'Settings'
    ],

    widgetName: 'abstract',

    initialize: function(dashboardController, settings) {

      this.setDashboardController(dashboardController);
      this.setSettings(settings || {});

      this._super();
    },

    setupView: function() {
      this.setView(new AbstractWidgetView());
    },

    widgetIsReady: function() {
      this.getView().setup();
    },

    viewIsReady: function() {
      var view = this.getView();

      view.$el.addClass(view.className);
      view.$el.addClass(this.widgetName);
      view.render();

      this.widgetIsReady();
    },

    getTemplateProperties: function() {

      return {
        name: this.widgetName,
        hasSettings: !!this.hasSettings
      };
    },

    requestWidgetClose: function() {
      this.getDashboardController().closeWidget(this);
    }

  });

  return AbstractWidgetController;
});