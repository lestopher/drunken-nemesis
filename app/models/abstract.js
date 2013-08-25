define([
  'vertebrae/model',
  'app/base/helper',
  'jquery',
  'underscore'
], function(Model, helper, $, _) {

  var AbstractModel = Model.extend({

  },
  {

    rootURI: '/api/',

    get: function(uri, params, options) {
      return this.request(uri, params, _.defaults(options || {}, { type: 'get' }));
    },

    request: function(uri, params, options) {
      options || (options = {});
      params || (params = {});

      var d = helper.deferred(),
          that = this,
          url = this.rootURI + uri;

      options = _.defaults(options, {
        data: params,
        url: url,
        type: 'post',
        success: function(resp) {
          resp = resp || {};
          
          if (resp.mesg === 'success') {
            var modelizer = that.parsers[uri] || that.defaultHandler;
            d.resolve(modelizer.call(that, resp.data || {}, params) || {}, params);
          } else {
            d.reject(resp);
          }
        },
        error: function() {
          d.reject({});
        }
      });

      $.ajax(options);

      return d;
    }

  });

  return AbstractModel;
});