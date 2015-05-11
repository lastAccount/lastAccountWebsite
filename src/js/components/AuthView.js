var React = require('react');
var ReactPropTypes = React.PropTypes;
var Login = require('./LoginView');
var Signup = require('./SignupView');


var AuthView = React.createClass({
  render: function(){
    return (
      <div id="auth-container">
        <Signup />
        <Login />
      </div>
    );
  }
});

module.exports = AuthView;