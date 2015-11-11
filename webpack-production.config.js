"use strict";

var config = require('./webpack.config.js');

// strip out console.log statements
config.module.loaders.push({
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'strip?strip[]=console.log!babel'
});

module.exports = config;