//index.js
var React = require('react');
var ReactDOM = require('react-dom');
var ButtonComponent = require('./ButtonComponent');

require('./module1.js');

//css
require('../css/aa.css');

//less
var less = require("less");
require('../css/bb.less');

ReactDOM.render( < ButtonComponent / > ,
	document.getElementById('root')
);
