var React = require('react');
var $ = require('jquery');
var AuthActions = require('../actions/AuthActions');
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');
var OAuthButton = require('./OAuthButton');

var Login = React.createClass({
  _onSave: function(email, password){
    AuthActions.login(email, password);
  },
  render: function(){
    return (
      <div className="login-container auth-container">
        <AuthField
          label="Login"
          className="login"
          emailId="login-email"
          passwordId="login-password"
          onSave={this._onSave} />
        <OAuthButton 
          provider="Google"/>
      </div>
    );
  }
});

module.exports = Login;