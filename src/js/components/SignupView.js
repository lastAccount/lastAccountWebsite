var React = require('react');
var AuthActions = require('../actions/AuthActions');
var AuthStore = require('../stores/AuthStore');
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');

var Signup = React.createClass({
  _onSave: function(email, password){
    AuthActions.signup(email, password);
  },
  render: function(){
    return (
      <div className="signup-container auth-container">
        <AuthField 
          label="Signup"
          className="signup"
          emailId="signup-email"
          passwordId="signup-password"
          onSave={this._onSave} />
      </div>
    );
  }
});

module.exports = Signup;