const {merge} = require("webpack-merge");
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 9000,
        host: '0.0.0.0',
        inline: true,
        progress: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
        },
    },
    watchOptions: {
        aggregateTimeout: 200,
        poll: true,
        ignored: /node_modules/,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
