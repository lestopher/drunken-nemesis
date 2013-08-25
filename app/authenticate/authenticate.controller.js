define([
  // Setup Classes
  'vertebrae/controller',
  'app/authenticate/authenticate.view',

  // Model
  'app/models/user',

  'app/base/helper'
], function(EVIController, AuthenticateView, User, helper) {

  var AutenticateController = EVIController.extend({

    properties: [
      'User'
    ],

    validators: {
      'username': [helper.validators.empty, helper.validators.email],
      'password': [helper.validators.empty]
    },

    setupView: function() {
      this.setView(new AuthenticateView());
    },

    requestLogin: function() {
      var view = this.getView();

      if (this.validate()) {

        view.showLoading();
        User.requestLogin(view.getUsername(), view.getPassword())
            .always(view.hideLoading.proxy(view))
            .done(this.userIsAuthenticated.proxy(this))
            .fail(this.userAuthenticationDidFail.proxy(this));
      }
    },

    userAuthenticationDidFail: function(err) {
      this.getView().showLoginError(err.mesg || 'Oops....something unexpected went wrong.');
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