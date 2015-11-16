"use strict";

import React from 'react';
import { Link, IndexLink } from 'react-router';

var activeClassName = 'active';

/**
 * Header navigation bar
 */
var Header = React.createClass({
	componentDidMount: function() {
		console.log('Header.js');
	},
	render: function() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<IndexLink to="/" activeClassName={activeClassName} className="navbar-brand">
							<svg className="icon icon-small" viewBox="0 0 50 50"><use xlinkHref="#icon-react"></use></svg>
							<span>My App</span>
						</IndexLink>
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/about" activeClassName={activeClassName}>About</Link></li>
							<li><Link to="/admin" activeClassName={activeClassName}>Admin</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="/">Logout</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

export default Header;