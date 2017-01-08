var path = require('path');
var webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION 
	?	[ './src/index.js'] 
	:	[
			'./src/index.js',
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080'
		];

var plugins = PRODUCTION 
	?	[
			new webpack.optimize.UglifyJsPlugin()
		] 
	:	[new webpack.HotModuleReplacementPlugin()];

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION)
	})
);


module.exports = {
	devtool: 'source-map',
	entry: entry,
	plugins: plugins,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: '/node_modules'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loaders: ['file-loader']
			},
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader'],
				exclude: '/node_modules'
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist/', 
		filename: 'bundle.js'
	}
}
