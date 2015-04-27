var React = require('react');
var ReactPropTypes = React.PropTypes;

var OAuthButton = React.createClass({
  propTypes: {
    provider: ReactPropTypes.string
  },
  _onSubmit: function(){
    var route = 'auth/google' + this.props.provider.toLowerCase();
  },
  render: function(){
    return (
      <button>
        Log In with {this.props.provider}
      </button>
    );
  }
});

module.exports = OAuthButton;