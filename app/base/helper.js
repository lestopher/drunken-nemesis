define([
  'evisions/helper',
  'app/templates',
  'handlebars.runtime'
], function(helper, templates, handlebars) {

  window.Handlebars = handlebars || window.Handlebars || {};

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