define([
  'app/models/abstract'
], function(AbstractModel) {

  var UserModel = AbstractModel.extend({

  },
  {
    parsers: {
      'authenticate/isAuthenticated': function(data) {

        return this.model(data);
      },
      'authenticate': function(data) {

        return this.model(data);
      }
    },

    requestLogin: function(username, password) {
      
      return this.request('authenticate', { email: username, password: password });
    },

    setup: function() {

      return this.get('authenticate/isAuthenticated');
    }
  });

  return UserModel;
});