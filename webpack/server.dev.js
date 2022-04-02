const common = require('./server.common');

module.exports = {
	...common,

	mode: 'development',
	devtool: 'eval-source-map',
	watch: true,
	optimization: {
		minimize: false,
	},
}