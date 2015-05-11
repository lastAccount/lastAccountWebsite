var React = require('react');
var ReactPropTypes = React.PropTypes;

/**
 * Material UI Components
 */
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var SubmitButton = React.createClass({
  propTypes: {
    id: ReactPropTypes.string,
    className: ReactPropTypes.string,
    onSubmit: ReactPropTypes.func.isRequired
  },
  _onClick: function(){

  },
  render: function(){

  }
});

module.exports = SubmitButton;