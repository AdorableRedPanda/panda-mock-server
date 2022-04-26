const common = require('./client.common')
const webpack = require("webpack");

module.exports = {
	...common,

	mode: 'development',
	devtool: 'eval-source-map',

	plugins: [
		...common.plugins,
		new webpack.DefinePlugin({
			'process.env': {
				APP_SETTINGS_PORT: JSON.stringify(process.env.APP_SETTINGS_PORT)
			}
		}),
	],

	devServer: {
		historyApiFallback: true,
		port: 8080,
		open: true
	}
}