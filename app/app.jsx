const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate app</p>,
  document.getElementById('app')
);
