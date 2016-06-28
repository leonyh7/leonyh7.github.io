var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: './src/scripts/index',
		app: './src/scripts/app'
	},
	output: {
		path: path.join(__dirname, 'dist'), //打包输出的路径
		filename: "[name].js",
		//chunkFilename: "[id].js",
		publicPath: "./dist/" //html引用路径，在这里是本地地址。
	},
	resolve: {
		extensions: ['', '.js', '.json', '.jsx'],
		root: [],
		alias: {
			'jquery': path.resolve('./', './src/lib/jquery.js')
		}
	},
	devtool: 'eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		new ExtractTextPlugin("[name].css", {
			allChunks: true
		})

	],
	module: {
		loaders: [{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: path.join(__dirname, '/src/scripts')
			}, {
				test: /\.(jpg|png)$/,
				loader: "url?limit=8192"
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			}
		]
	}
};