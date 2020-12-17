const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Some title',
			template: path.resolve(__dirname, '..', './src/index.html'), // шаблон
			filename: 'index.html', // название выходного файла
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '..', 'dist'),
	},
};
