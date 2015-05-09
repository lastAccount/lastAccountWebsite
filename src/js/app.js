var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
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
      <Auth />
    );
  }
});

var routes = (
  <Route name="home" path="/">
  </Route>
);

React.render(
  <App />,
  document.getElementById('app')
);