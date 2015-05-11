var React = require('react');
var ReactPropTypes = React.PropTypes;

/**
 * Material UI Components
 */
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var SubmitButton = React.createClass({
  propTypes: {
    label: ReactPropTypes.string,
    id: ReactPropTypes.string,
    className: ReactPropTypes.string,
    onSubmit: ReactPropTypes.func.isRequired
  },
  _submit: function(){
    this.props.onSubmit();
  },
  render: function(){
    return (
      <RaisedButton
        label={this.props.label}
        id: {this.props.id}
        className: {this.props.className}
        onClick: this._submit />
    );
  }
});

module.exports = SubmitButton;