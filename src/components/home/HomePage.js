"use strict";

import React from 'react';
import rp from 'request-promise';
import { apiUrl } from '../../../src/constants.js';

var HomePage = React.createClass({
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
		console.log('HomePage.js');
		return (
			<div>
				<h2>Home</h2>
				<button className="btn btn-primary" onClick={this.handleClick}>API Call</button>
			</div>
		);
	}
});

module.exports = HomePage;