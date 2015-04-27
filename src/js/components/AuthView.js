var React = require('react');
var ReactPropTypes = React.PropTypes;
var Login = require('./LoginView');
var Signup = require('./SignupView');
var OAuthButton = require('./OAuthButton');


var AuthView = React.createClass({
  render: function(){
    return (
      <div id="authcontainer">
      <Signup />
      <Login />
      <OAuthButton 
        provider="Google"/>
      </div>
    );
  }
});

module.exports = AuthView;