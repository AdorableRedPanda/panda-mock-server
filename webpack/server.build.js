const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config({ path: './.env' });

module.exports = {
	mode: 'production',
	devtool: 'eval-source-map',
	target: 'node',
	entry: ['./src/server/index.ts'],
	output: {
		filename: 'mock-server.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.APP_SETTINGS_PORT": JSON.stringify(process.env.APP_SETTINGS_PORT),
			"process.env.APP_MOCKS_PORT": JSON.stringify(process.env.APP_MOCKS_PORT),
		}),
	],
	resolve: {
		extensions: ['.ts', '.js'],
	}
}