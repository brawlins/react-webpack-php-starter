"use strict";

import React from 'react';
import rp from 'request-promise';
import { apiUrl } from '../../../src/constants.js';

/**
 * Home Page
 */
var HomePage = React.createClass({
	componentDidMount: function() {
		console.log('HomePage.js');
	},
	handleClick: function() {
		rp({
			uri: apiUrl,
			json: true,
			qs: { action: 'hello' }
		})
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
	},
	render: function() {
		return (
			<div>
				<h2>Home</h2>
				<button className="btn btn-primary" onClick={this.handleClick}>API Call</button>
			</div>
		);
	}
});

export default HomePage;