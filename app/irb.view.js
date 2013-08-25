define([
  'vertebrae/view',

  'app/base/helper'
], function(EVIView, helper) {

  var IRBView = EVIView.extend({

    events: {

    },

    templates: {
      'app': 'renderAppFragment'
    },

    render: function() {
      this.$el.html(this.renderAppFragment(this.getDelegate().getTemplateProperties()));
    },

    getHeaderElement: function() {
      return this.$('#header');
    },

    getSidebarElement: function() {
      return this.$('#sidebar');
    },

    getDashboardElement: function() {
      return this.$('#dashboard');
    }

  });

  return IRBView;
});