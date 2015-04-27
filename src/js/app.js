var React = require('react');
/**
 * Required Components
 */
var Auth = require('./components/AuthView');

var App = React.createClass({
  render: function(){
    return (
      <Auth />
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);