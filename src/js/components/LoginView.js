var React = require('react');
var $ = require('jquery');
var AuthActions = require('../actions/AuthActions');
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');

var Login = React.createClass({
  _onSave: function(email, password){
    AuthActions.login(email, password);
  },
  render: function(){
    return (
      <AuthField
        label="Login"
        className="login"
        emailId="login-email"
        passwordId="login-password"
        onSave={this._onSave} />
    );
  }
});

module.exports = Login;