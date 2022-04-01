const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

dotenv.config({ path: './.env' });

module.exports = {
	entry: './client/index.tsx',
	output: {
		filename: 'mock-client.[name].js',
		path: path.resolve(__dirname, '../dist/client/')
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './client/index.html',
			filename: './index.html',
		}),
		new webpack.DefinePlugin({
			"process.env.APP_SETTINGS_PORT": JSON.stringify(process.env.APP_SETTINGS_PORT),
			"process.env.APP_MOCKS_PORT": JSON.stringify(process.env.APP_MOCKS_PORT),
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx']
	}
}