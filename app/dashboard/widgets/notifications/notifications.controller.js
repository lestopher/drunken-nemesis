define([
  'app/dashboard/widgets/abstract.widget.controller',

  'app/dashboard/widgets/notifications/notifications.view'
], function(AbstractWidgetController, NotificationsWidgetView) {

  var WelcomeWidgetController = AbstractWidgetController.extend({

    widgetName: 'notifications',

    hasSettings: true,

    setupView: function() {
      this.setView(new NotificationsWidgetView());
    },

    widgetIsReady: function() {
      
      this.getView().renderNotification({
        title: 'Limited Availability',
        text: 'System will be upated between 07/23-07/25'
      });
    }

  });

  return WelcomeWidgetController;
});