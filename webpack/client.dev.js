const common = require('./client.common')

module.exports = {
	...common,

	mode: 'development',
	devtool: 'eval-source-map',

	devServer: {
		historyApiFallback: true,
		port: 8080,
		open: true
	}
}