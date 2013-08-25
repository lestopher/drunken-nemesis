define([
  'vertebrae/controller',

  'app/header/header.view'
], function(EVIController, HeaderView) {

  var HeaderController = EVIController.extend({

    properties: [
      'User'
    ],

    initialize: function(user) {
      this.setUser(user);
      this._super();
    },

    setupView: function() {
      this.setView(new HeaderView());
    },

    getTemplateProperties: function() {
      var user = this.getUser(),
          navs = [
          'home',
          'admin',
          'reporting',
          'gm',
          'help',
          'logout'
        ];

      return {
        navWidth        : (100/navs.length) + '%',
        navigationLinks : navs,
        user            : user.first_name
      };
    }

  });

  return HeaderController;
});