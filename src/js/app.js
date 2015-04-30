var React = require('react');
/**
 * Needed for onTouchTap events in Material-UI
 */
require("react-tap-event-plugin")();

/**
 * Required Components
 */
var Auth = require('./components/AuthView');
var Template = require('./components/Template');

var App = React.createClass({
  render: function(){
    return (
      <Template />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);