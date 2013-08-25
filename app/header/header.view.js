define([
  'vertebrae/view',

  'app/base/helper'
], function(EVIView, helper) {

  var HeaderView = EVIView.extend({

    templates: {
      'header.init': 'renderInitFragment'
    },

    render: function() {
      this.$el.html(this.renderInitFragment(this.getDelegate().getTemplateProperties()));
    }

  });

  return HeaderView;
});