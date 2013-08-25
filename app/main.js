define([
  'vertebrae/object',
  'app/base/helper',
  'jquery',

  'app/authenticate/authenticate.controller',
  'app/irb.controller'
], function(EVIObject, helper, $, AuthenticateController, IRBController) {

  window.Handlebars = window.Handlebars || {};

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

      this.$el.empty();

      this.IRBController = new IRBController(user);
      this.IRBController.setupViewProperties(this.$el);

    }
  });

  return App;
});
