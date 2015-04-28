var React = require('react');
var ReactPropTypes = React.PropTypes;
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var FontIcon = mui.FontIcon;

var OAuthButton = React.createClass({
  propTypes: {
    provider: ReactPropTypes.string
  },
  _onSubmit: function(){
    var route = 'auth/google' + this.props.provider.toLowerCase();
  },
  render: function(){
    return (
      <div className="button-container">
        <RaisedButton linkButton={true} href="https://google.com" secondary={true}>
          <FontIcon className="muidocs-icon-custom-github example-button-icon"/>
          <span className="mui-raised-button-label">Log In with {this.props.provider} </span>
        </RaisedButton>
      </div>
    );
  }
});

module.exports = OAuthButton;