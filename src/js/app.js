var React = require('react');
/**
 * Needed for onTouchTap events in Material-UI
 */
require("react-tap-event-plugin")();

/**
 * Required Components
 */
var Auth = require('./components/AuthView');

var App = React.createClass({
  render: function(){
    return (
      <Auth />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);