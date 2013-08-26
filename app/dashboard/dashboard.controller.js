define([
  'vertebrae/controller',

  'app/dashboard/dashboard.view',

  'app/dashboard/widgets/factory'
], function(EVIController, DashboardView, Widgets) {

  var DashboardController = EVIController.extend({

    properties: [
      'User'
    ],

    initialize: function(user) {
      this.setUser(user);

      this._super();
    },

    setupView: function() {
      this.setView(new DashboardView());
    },

    viewIsReady: function() {
      this._super();

      this.placeWidget(this.createWidget('welcome'));
      this.placeWidget(this.createWidget('notifications'));
    },

    createWidget: function(name, settings) {
      var ctor = this.getWidgetByName(name);

      if (ctor) {
        return new ctor(this, settings || {});
      }
    },

    closeWidget: function(widget) {
      var that = this;

      this.getView().closeWidgetView(widget.getView())
          .always(function() {
            that.widgetViewDidClose(widget);
          });
    },

    widgetViewDidClose: function(widget) {
      widget.destroy();
    },

    getWidgetByName: function(name) {

      return Widgets[name];
    },

    placeWidget: function(widget, position) {
      if (widget == null) { return false; }

      var view = this.getView(),
          el   = null;

      switch (position) {
        case 'left':
          el = view.createElementAtLeft();
        break;
        case 'right':
          el = view.createElementAtRight();
        break;
        default:
          el = view.createElementAtTop();
        break;
      }

      widget.setupViewProperties(el);
    }

  });

  return DashboardController;
});