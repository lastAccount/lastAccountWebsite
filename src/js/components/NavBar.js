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

var NavBar = React.createClass({
  propTypes: {
    items: ReactPropTypes.array,
    id: ReactPropTypes.string
  },
  render: function(){
    return (
      <div className="nav-bar">
        <Toolbar>
          <ToolbarGroup key={0} float="left">
            <RaisedButton 
              label="Signup/Login"
              secondary={true}>
              <Link to="auth"></Link>
            </RaisedButton>
          </ToolbarGroup>
        </Toolbar>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = NavBar;