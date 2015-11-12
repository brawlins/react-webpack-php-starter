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
// use the browser's History API rather than the default hash history
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';

console.log('main.js');

render((
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="about" component={AboutPage}/>
			<Redirect from="*" to="/" />
		</Route>
	</Router>
), document.getElementById('root'));