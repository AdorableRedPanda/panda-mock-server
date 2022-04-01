const common = require('./client.common')

module.exports = {
	...common,

	mode: 'production',

	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all'
		}
	}
}