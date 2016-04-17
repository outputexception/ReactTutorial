var React = require('react');
var ReactDOM = require('react-dom');

var routers = require('./config/routers');

ReactDOM.render(
  routers,
  document.getElementById('app')
);
