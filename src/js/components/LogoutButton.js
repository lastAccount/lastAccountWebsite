var React = require('react');
var AuthActions = require('../actions/AuthActions');
var AuthStore = require('../stores/AuthStore');

/**
 * Material UI components
 */
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var LogoutButton = React.createClass({
  _onClick: function(){
    AuthActions.logout();
  },
  render: function(){
    return (
      <RaisedButton
        secondary={true}
        label="Logout"
        onClick={this._onClick}/>
    );
  }
});

module.exports = LogoutButton;