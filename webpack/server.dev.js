const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding
const build = require('./server.build');

module.exports = {
	...build,
	entry: ['./src/server/dev.ts'],
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