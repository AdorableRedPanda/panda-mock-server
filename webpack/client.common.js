const path = require('path');
const dotenv = require('dotenv');

const HtmlWebPackPlugin = require('html-webpack-plugin');
dotenv.config({ path: './.env' });

module.exports = {
	entry: './src/client/index.tsx',
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
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/index.html',
			filename: './index.html',
		})
	],
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx']
	}
}