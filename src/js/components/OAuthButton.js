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
  _onSubmit: function(){
    AuthActions.oauth(this.props.provider.toLowerCase());
  },
  render: function(){
    return (
      <div className="button-container">
        <RaisedButton 
          secondary={true}
          onClick={this._onSubmit}>
          <FontIcon className="muidocs-icon-custom-github example-button-icon"/>
          <span className="mui-raised-button-label">Log In with {this.props.provider} </span>
        </RaisedButton>
      </div>
    );
  }
});

module.exports = OAuthButton;