define([
  'vertebrae/controller',

  'app/irb.view',
  'app/base/helper',

  'app/header/header.controller',
  'app/dashboard/dashboard.controller'
], function(EVIController, IRBView, helper, HeaderController, DashboardController) {

  var IRBController = EVIController.extend({

    properties: [
      'User',
      'HeaderController',
      'DashboardController'
    ],

    initialize: function(user) {
      this.setUser(user);
      this.initializeControllers();
      this._super.apply(this, arguments);
    },

    initializeControllers: function() {
      this.setHeaderController(new HeaderController(this.getUser()));
      this.setDashboardController(new DashboardController(this.getUser()));
    },

    setupControllerViews: function() {
      var view = this.getView();

      this.getHeaderController().setupViewProperties(view.getHeaderElement());
      this.getDashboardController().setupViewProperties(view.getDashboardElement());
    },

    setupView: function() {
      this.setView(new IRBView());
    },

    viewIsReady: function() {
      this._super();
      this.setupControllerViews();
    },

    getTemplateProperties: function() {
      return this.getUser();
    }

  });

  return IRBController;
});