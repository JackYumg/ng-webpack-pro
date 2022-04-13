const webpackMerge = require('webpack-merge').default;
const commonConfig = require('./webpack.common.js');
const path = require('path');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: false,
    mode: ENV,
    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].[hash].chunk.js'
    },
    optimization: {
        concatenateModules: true,
        emitOnErrors: true,
        flagIncludedChunks: true,
        removeAvailableModules: true,
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
    ]
});