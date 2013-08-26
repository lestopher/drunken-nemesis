define([
  'app/dashboard/widgets/welcome/welcome.controller',
  'app/dashboard/widgets/notifications/notifications.controller'
], function(WelcomeWidgetController, NotificationsWidgetController) {

  return {
    welcome: WelcomeWidgetController,
    notifications: NotificationsWidgetController
  };
});