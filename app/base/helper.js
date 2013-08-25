define([
  'evisions/helper',
  'app/templates'
], function(helper, templates) {

  window.Handlebars = window.Handlebars || {};

  window.Handlebars.templates = templates;

  helper.template = function(name, data) {
    var template = templates[name];

    if (template) {

      return template(data || {});
    }

    return '';
  };

  return helper;
});