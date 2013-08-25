define([
  'app/models/abstract'
], function(AbstractModel) {

  var UserModel = AbstractModel.extend({

  },
  {
    parsers: {
      'authenticate/isAuthenticated': function(data) {
        return this.model(data);
      }
    },
    setup: function() {
      return this.get('authenticate/isAuthenticated');
    }
  });

  return UserModel;
});