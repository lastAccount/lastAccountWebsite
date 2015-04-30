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
        <TextInput
          label="Username"
          className="template-input"
          id="template-username"
          type="text"
          onSave={this._onSave} />
        <br />
        <TextInput
          label="Email"
          className="template-input"
          id="template-email"
          type="email"
          onSave={this._onSave} />
        <br />
        <TextInput
          label="Full Name"
          className="template-input"
          id="template-fullname"
          type="text"
          onSave={this._onSave} />
        <br />
        <TextInput
          label="First Name"
          className="template-input"
          id="template-firstname"
          type="text"
          onSave={this._onSave} />
        <br />
        <TextInput
          label="Last Name"
          className="template-input"
          id="template-lastname"
          type="text"
          onSave={this._onSave} />
      </form>
    );
  }
});

module.exports = Template;
