"use strict";

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// strip out console.log statements
webpackConfig.module.loaders.push({
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'strip?strip[]=console.log!babel'
});

// set node env to production
webpackConfig.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	})
);

module.exports = webpackConfig;