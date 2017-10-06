'use strict';


const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const utils = require('./utils');
const ExampleLoader = require.resolve('./example-loader');

// const components = fs.readdirSync(path.resolve('src', 'components'))
// 	.filter(i => i.substr(0, 1) !== '.')
// 	.map(i => `./src/components/${i}`);

const components = [];

components.push('./src/dev-app/index.js');
components.unshift('webpack-hot-middleware/client?noInfo=false&reload=true');

module.exports = {

	entry: {
		components
	},

	resolve: {
		extensions: ['.js', '.vue', '.json', '.css', '.scss', '.pug'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			// '@': config.clientPath,
			'zue': path.resolve('src')
		}
	},



	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.resolve('src')]
			},
			...utils.generateStyleLoaders({
				sourceMap: false,
				extract: false
			}),
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: Object.assign({
						example: ExampleLoader,
					}, utils.generateCssLoaders({
						sourceMap: false,
						extract: false
					})),

					transformToRequire: {
						video: 'src',
						source: 'src',
						img: 'src',
						image: 'xlink:href'
					}

				}
			},
		]
	},


	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve('src', 'dev-app', 'index.html'),
			inject: true,
			chunksSortMode: 'dependency',
			cache: false
		}),

	]
}
