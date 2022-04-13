const webpackMerge = require('webpack-merge').default;
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        compress: true
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
});
