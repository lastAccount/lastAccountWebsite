var React = require('react');
/**
 * Required Components
 */
var Template = require('./components/Template');

var App = React.createClass({
  render: function(){
    return (
      <Template />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);