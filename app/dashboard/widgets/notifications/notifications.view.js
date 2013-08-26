define([
  'app/dashboard/widgets/abstract.widget.view'

], function(AbstractWidgetView) {

  var WelcomeWidgetView = AbstractWidgetView.extend({


    templates: {
      'notification.widget.entry': 'renderEntryFragment'
    },

    renderNotification: function(notification) {

      this.renderEntry(this.renderEntryFragment(notification));
    }

  });

  return WelcomeWidgetView;
});