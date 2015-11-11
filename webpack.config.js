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
		// set node env
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	], 
	module: {
		loaders: [
			// transforms JSX and ES6
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },

			// makes jQuery available to bootstrap js
			{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

			// loads font icons for bootstrap css
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }			
		]
	}
};