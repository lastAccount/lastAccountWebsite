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
    var existingTemplate = localStorage['lastAccountTemplate'];
    return {
      
    };
  },
  _onSave: function(){

  },
  render: function(){
    //Username
    <TextInput
      className="template-input"
      id="template-username"
      type="text"
      placeholder="Username"
      onSave={this._onSave} />
    //Email
    <TextInput
      className="template-input"
      id="template-email"
      type="email"
      placeholder="Email"
      onSave={this._onSave} />
    //Full Name
    <TextInput
      className="template-input"
      id="template-fullname"
      type="text"
      placeholder="Full Name"
      onSave={this._onSave} />
    //First Name
    <TextInput
      className="template-input"
      id="template-firstname"
      type="text"
      placeholder="First Name"
      onSave={this._onSave} />
    //Last Name
    <TextInput
      className="template-input"
      id="template-lastname"
      type="text"
      placeholder="Last Name"
      onSave={this._onSave} />
  }
});

module.exports = Template;
