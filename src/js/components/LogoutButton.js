var React = require('react');
var AuthActions = require('../actions/AuthActions');

/**
 * Material UI components
 */
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var LogoutButton = React.createClass({
  _onClick: function(){
    AuthActions.logout()
  },
  render: function(){
    return (
      <div class="logout-button">
        <RaisedButton
          label="Logout"
          onClick={this._onClick}/>
      </div>
    );
  }
});

module.exports = LogoutButton;