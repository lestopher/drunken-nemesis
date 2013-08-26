define([
  'app/dashboard/widgets/abstract.widget.controller',

  'app/dashboard/widgets/welcome/welcome.view'
], function(AbstractWidgetController, WelcomeWidgetView) {

  var WelcomeWidgetController = AbstractWidgetController.extend({

    widgetName: 'welcome',

    setupView: function() {
      this.setView(new WelcomeWidgetView());
    },

    widgetIsReady: function() {

    }

  });

  return WelcomeWidgetController;
});