define([
  'vertebrae/object',
  'app/base/helper',
  'jquery',

  'app/authenticate/authenticate.controller'
], function(EVIObject, helper, $, AuthenticateController) {

  var App = EVIObject.extend({

    properties: [
      'AuthenticateController'
    ],

    initialize: function(el) {
      this.$el = $(el);
    },

    start: function() {
      this.$el.html(helper.template('init'));
      
      this.setAuthenticateController(new AuthenticateController());

      this.getAuthenticateController()
          .once('authenticated', this.userIsAuthenticated.proxy(this))
          .setupViewProperties(this.$el.find('#login'));
    },

    userIsAuthenticated: function(user) {
      this.getAuthenticateController().destroy();
      this.$el.find('#weclome').html("welcome " + user.first_name);
    }
  });

  return App;
});
