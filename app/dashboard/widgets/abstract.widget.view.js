define([
  'vertebrae/view',

  'jquery'
], function(EVIView, $) {

  var AbstractWidgetView = EVIView.extend({

    className: 'dashboardWidget',

    events: {
      'click .closeWidget': 'handleCloseRequest'
    },

    templates: {
      'abstract.widget.init': 'renderBaseWidgetFragment'
    },

    /**
     * Render the contents of a widget here
     */
    setup: function() {

    },

    render: function() {
      this.$el.html(this.renderBaseWidgetFragment(this.getDelegate().getTemplateProperties()));
    },

    renderEntry: function(content, options) {
      var newEntry   = $('<div />').addClass('widgetEntry'),
          span       = $('<span class="entryWrapper" />'),
          widgetBody = this._widgetBody || this.$(".widgetBody");

      options = options || {};

      span.html(content);

      newEntry.html(span);

      widgetBody.append(newEntry);

      return newEntry;
    },

    handleCloseRequest: function() {
      this.getDelegate().requestWidgetClose();
    }

  });

  return AbstractWidgetView;
});