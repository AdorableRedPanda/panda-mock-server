const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding
const build = require('./server.build');

module.exports = {
	...build,

	mode: 'development',
	devtool: 'eval-source-map',
	watch: true,
	optimization: {
		minimize: false,
	},
	plugins: [
		...build.plugins,
		new NodemonPlugin(),
	]
}