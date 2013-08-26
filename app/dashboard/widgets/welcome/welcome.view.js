define([
  'app/dashboard/widgets/abstract.widget.view'

], function(AbstractWidgetView) {

  var WelcomeWidgetView = AbstractWidgetView.extend({

    templates: {
      'welcome.init': 'renderInitFragment'
    },

    render: function() {
      this.$el.html(this.renderInitFragment());
    }

  });

  return WelcomeWidgetView;
});