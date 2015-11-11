"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
	render: function() {
		console.log('Header.js');
		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="">My App</a>
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><a href="">Page 1</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="">Logout</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Header;