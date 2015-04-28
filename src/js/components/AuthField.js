var React = require('react');
var ReactPropTypes = React.PropTypes;
var $ = require('jquery');
/**
 * Component Dependencies
 */
var TextInput = require('./TextInput');

var AuthField = React.createClass({
  propTypes: {
    label: ReactPropTypes.string,
    className: ReactPropTypes.string,
    emailId: ReactPropTypes.string,
    passwordId: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired
  },
  _onSave: function(){
    var email = $('#signup-email').val().trim();
    var password = $('#signup-password').val().trim();
    if (email && password) {
      this.props.onSave(email, password);
    }
  },
  render: function(){
    return (
      <form className={this.props.className}>
        <label htmlFor={this.props.className}>{this.props.label}</label>
        <br />
        <TextInput
          label="Email"
          className="emailField"
          id={this.props.emailId}
          type="text" 
          onSave={this._onSave} />
        <br />
        <TextInput
          label="Password"
          className="passwordField"
          id={this.props.passwordId}
          type="password" 
          onSave={this._onSave} />
      </form>
    );
  }
});

module.exports = AuthField;