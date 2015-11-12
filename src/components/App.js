"use strict";

import React from 'react';
import Header from './Header.js';
import {} from 'bootstrap-webpack';
import {} from '../css/app.css';
import {} from '../svg/icons.svg';

var App = React.createClass({
	componentDidMount: function() {
		console.log('App.js');
	},
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="row col-sm-12">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

export default App;