var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

/**
 * Needed for onTouchTap events in Material-UI
 */
require("react-tap-event-plugin")();

/**
 * Required Components
 */
var Auth = require('./components/AuthView');
var Template = require('./components/Template');
var NavBar = require('./components/NavBar');

var routes = (
  <Route name="home" path="/" handler={NavBar}>
    <Route name="auth" path="/auth" handler={Auth}/>
    <Route name="template" path="/template" handler={Template} />
    <NotFoundRoute handler={Auth} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});