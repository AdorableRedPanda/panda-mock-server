const common = require('./client.common')
const webpack = require("webpack");

module.exports = {
	...common,

	mode: 'production',

	plugins: [
		...common.plugins,
		new webpack.DefinePlugin({
			'process.env': {}
		}),
	],

	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all'
		}
	}
}