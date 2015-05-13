var React = require('react');
var ReactPropTypes = React.PropTypes;

/**
 * Component Dependencies
 */
var Login = require('./LoginView');
var Signup = require('./SignupView');


var AuthView = React.createClass({
  render: function(){
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
});

module.exports = AuthView;