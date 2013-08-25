define([
  'vertebrae/controller',

  'app/sidebar/sidebar.view'
], function(EVIController, SidebarView) {

  var SidebarController = EVIController.extend({

    setupView: function() {
      this.setView(new SidebarView());
    }

  });

  return SidebarController;
});