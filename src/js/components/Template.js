var React = require('react');
var $ = require('jquery');
/**
 * Required Components
 */
var TextInput = require('./TextInput');

var Template = React.createClass({
  /**
   * Grab existing template from local storage
   */
  getInitialState: function(){
    return {
      
    };
  },
  _onSave: function(){

  },
  render: function(){
    return (
      <form id="template-form">
        <label for="template-username">Username</label>
        <TextInput
          className="template-input"
          id="template-username"
          type="text"
          placeholder="Username"
          onSave={this._onSave} />
        <br />
        <label for="template-email">Email</label>
        <TextInput
          className="template-input"
          id="template-email"
          type="email"
          placeholder="Email"
          onSave={this._onSave} />
        <br />
        <label for="template-fullname">Full Name</label>
        <TextInput
          className="template-input"
          id="template-fullname"
          type="text"
          placeholder="Full Name"
          onSave={this._onSave} />
        <br />
        <label for="template-firstname">First Name</label>
        <TextInput
          className="template-input"
          id="template-firstname"
          type="text"
          placeholder="First Name"
          onSave={this._onSave} />
        <br />
        <label for="template-lastname">Last Name</label>
        <TextInput
          className="template-input"
          id="template-lastname"
          type="text"
          placeholder="Last Name"
          onSave={this._onSave} />
      </form>
    );
  }
});

module.exports = Template;
