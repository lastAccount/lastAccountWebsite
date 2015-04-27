var React = require('react');
/**
 * Required Components
 */
var Signup = require('./components/SignupView');

var App = React.createClass({
  render: function(){
    return (
      <Signup />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);