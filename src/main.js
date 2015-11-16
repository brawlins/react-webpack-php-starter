"use strict";

/**
 * This is the entry point for the webpack bundle.
 *
 * Import any libraries needed across the whole application. Define navigation
 * routes and import the top-level component for each route.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import rp from 'request-promise';
import history from './history.js';
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';
import AdminPage from './components/admin/AdminPage.js';
import { apiUrl } from './constants.js';

console.log('main.js');

function isAdmin() {
	return rp({
		uri: apiUrl,
		json: true,
		qs: { action: 'isAdmin' }
	}).then(function(isAdmin) {
		return isAdmin;
	}).catch(function(error) {
		console.log(error);
	});
}

function requireAdmin(transition) {
	console.log(transition);
	isAdmin().then(function(isAdmin) {
		// redirect if not admin
		if (!isAdmin) {
			history.replaceState(null, '/');
		}
	});
}

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="about" component={AboutPage} />
			<Route path="admin" component={AdminPage} onEnter={requireAdmin} />
			<Redirect from="*" to="/" />
		</Route>
	</Router>
), document.getElementById('app'));