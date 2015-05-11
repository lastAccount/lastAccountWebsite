var React = require('react');
var ReactPropTypes = React.PropTypes;
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var FontIcon = mui.FontIcon;
var AuthActions = require('../actions/AuthActions');

var OAuthButton = React.createClass({
  propTypes: {
    provider: ReactPropTypes.string
  },
  _onClick: function(){
    AuthActions.oauth(this.props.provider.toLowerCase());
  },
  render: function(){
    return (
      <div className="oauth-button">
        <RaisedButton
          label={"Log In With " + this.props.provider} 
          primary={true}
          onClick={this._onClick}>
          <FontIcon className="muidocs-icon-custom-github example-button-icon"/>
        </RaisedButton>
      </div>
    );
  }
});

module.exports = OAuthButton;