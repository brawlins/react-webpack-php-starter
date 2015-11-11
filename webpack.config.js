'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, 'src/main.js')
	], 
	output: {
		path: path.join(__dirname, 'dist/build/'),
		filename: 'bundle.js'
	}, 
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	], 
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
		]
	}, 
	resolve: {
		modulesDirectories: ['node_modules/']
	}
};