var React = require('react');
var ReactPropTypes = React.PropTypes
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
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

module.exports = NavBar;