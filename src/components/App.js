"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.js');

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');
require('../css/app.css');


var App = React.createClass({
	render: function() {
		console.log('App.js');
		return (
			<div>
				<Header />
				<div className="container">
					<div className="row col-sm-12">
						<h2>App.js</h2>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;