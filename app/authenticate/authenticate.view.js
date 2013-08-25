define([
  'evisions/view',
  'app/base/helper'
], function(EVIView, helper) {

  var AuthenticateView = EVIView.extend({

    events: {
      'click .login': 'handleLogin',
      'enterkey input': 'handleLogin'
    },

    templates: {
      'authenticate.init': 'renderInitFragment'
    },

    handleLogin: function(ev) {
      this.hideLoginError();
      this.getDelegate().requestLogin();
    },

    showLoginError: function(mesg) {
      this.$('.loginError').text(mesg).slideDown();
      this._hideLoginErrorTimeout = setTimeout(this.hideLoginError.proxy(this), 5000);
    },

    hideLoginError: function() {
      clearTimeout(this._hideLoginErrorTimeout);
      this.$('.loginError').slideUp();
    },

    showUsernameError: function(mesg) {
      this.$('.emailError').text(mesg).slideDown();
    },

    showPasswordError: function(mesg) {
      this.$('.passwordError').text(mesg).slideDown();
    },

    showPasswordSuccess: function() {
      this.$('.passwordError').slideUp();
    },

    showUsernameSuccess: function() {
      this.$('.emailError').slideUp();
    },

    getUsername: function() {
      return this.$('.emailInput').val();
    },

    getPassword: function() {
      return this.$('.passwordInput').val();
    },

    // TODO: show login loading
    showLoading: function() {

    },
    // TODO: hide login loading
    hideLoading: function() {

    },

    render: function() {
      this.$el.html(this.renderInitFragment());
    },

    unload: function() {
      clearTimeout(this._hideLoginErrorTimeout);
      this._super.apply(this, arguments);
    }

  });

  return AuthenticateView;
});