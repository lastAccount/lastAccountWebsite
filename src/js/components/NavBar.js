var React = require('react');
var ReactPropTypes = React.PropTypes;
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

/**
 * Material UI Components
 */
var mui = require('material-ui');
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var RaisedButton = mui.RaisedButton;

/**
 * Component dependencies
 */
var LogoutButton = require('./LogoutButton');

var NavBar = React.createClass({
  propTypes: {
    items: ReactPropTypes.array
  },
  render: function(){
    return (
      <div className="nav-bar">
        <Toolbar>
          <ToolbarGroup key={0} float="left">
            <Link to="template">
              <RaisedButton 
                label="Template"
                secondary={true} />
            </Link>
            <Link to="auth">
              <RaisedButton 
                label="Signup/Login"
                secondary={true} />
            </Link>
            <LogoutButton />
          </ToolbarGroup>
        </Toolbar>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = NavBar;