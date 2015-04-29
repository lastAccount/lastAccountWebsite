var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var AuthActions = {
  signup: function(email, password){
    AppDispatcher.dispatch({
      actionType: AuthConstants.SIGNUP,
      email: email,
      password: password
    });
  },
  login: function(email, password){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN,
      email: email,
      password: password
    });
  },
  oauth: function(provider){
    console.log("In AuthActions");
    AppDispatcher.dispatch({
      actionType: AuthConstants.OAUTH,
      provider: provider
    });
  }
};

module.exports = AuthActions;