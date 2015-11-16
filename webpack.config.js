'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: [
		path.join(__dirname, 'src/main.js')
	], 
	output: {
		path: path.join(__dirname, 'public/build/'),
		filename: 'bundle.js'
	}, 
	plugins: [
		// output a separate css bundle
		new ExtractTextPlugin('bundle.css'),

		// reloads browser when the watched files change
		new BrowserSyncPlugin({
			// use existing Apache virtual host
			proxy: 'http://local.react-starter/',
			tunnel: true,
			// watch the built files and the index file
			files: ['public/build/*', 'public/index.php']
		}),

		// set node env
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	], 
	module: {
		loaders: [
			// transpiles JSX and ES6
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },

			// makes jQuery available to Bootstrap js
			{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

			// extracts css as separate output file
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },

			// loads font icons for Bootstrap css
			{ test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },

			{ test: /\.json$/, loader: 'json' }
		]
	}, 
	// needed to make request-promise work
	node: {
		net: 'empty',
		tls: 'empty'
	}
};