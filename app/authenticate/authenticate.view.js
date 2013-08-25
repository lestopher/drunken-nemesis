define([
  'evisions/view',
  'app/base/helper'
], function(EVIView, helper) {

  var AuthenticateView = EVIView.extend({

    events: {
      'click .login': 'handleLogin'
    },

    templates: {
      'authenticate.init': 'renderInitFragment'
    },

    render: function() {
      this.$el.html(this.renderInitFragment());
    }

  });

  return AuthenticateView;
});