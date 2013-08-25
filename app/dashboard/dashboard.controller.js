define([
  'vertebrae/controller',

  'app/sidebar/sidebar.view'
], function(EVIController, DashboardView) {

  var DashboardController = EVIController.extend({

    setupView: function() {
      this.setView(new DashboardView());
    }

  });

  return DashboardController;
});