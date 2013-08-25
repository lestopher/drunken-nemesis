define([
  // Setup Classes
  'vertebrae/controller',
  'app/authenticate/authenticate.view',

  // Model
  'app/models/user'
], function(EVIController, AuthenticateView, User) {

  var AutenticateController = EVIController.extend({

    properties: [
      'User'
    ],

    setupView: function() {
      this.setView(new AuthenticateView());
    },

    viewIsReady: function() {
      User.setup()
          .done(this.userIsAuthenticated.proxy(this))
          .fail(this.userNotAuthenticated.proxy(this));
    },

    userIsAuthenticated: function(user) {
      this.trigger('authenticated', user);
    },

    userNotAuthenticated: function() {
      this.getView().render();
    }

  });

  return AutenticateController;
});