var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack/hot/only-dev-server',
		'./app/index.js'
	],
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{ 
				test: /\.less$/, 
				loader: "style!css!less",
				include: APP_PATH
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
	devServer: {
		hot: true,
		inline: true
	}
	// plugins: [
	// 	new webpack.NoErrorsPlugin(),
	// 	new webpack.HotModuleReplacementPlugin()
	// ]
};