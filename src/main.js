"use strict";

console.log('main.js');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
// use the browser's History API rather than the default hash history
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';

render((
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="about" component={AboutPage}/>
			<Redirect from="*" to="/" />
		</Route>
	</Router>
), document.getElementById('root'));