const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EncodingPlugin = require('webpack-encoding-plugin');

const path = require('path');
module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        angular: './src/angular-vonder.ts',
        rxjs: './src/RxJS-vonder.ts',
        style: "./src/style-vonder.ts",
        app: './src/main.ts'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [{
                            tag: 'img',
                            attribute: 'src',
                            type: 'src',
                            filter: (tag, attribute, attributes, resourcePath) => {
                                if (/assets/.test(attributes.value)) {
                                    attributes.value = attributes.value.replace(/[.]{1,}\//g, '');
                                }
                                return true;
                            }
                        }]
                    }
                }
            },
            {
                test: /\.css|\.less$/,
                include: path.join(__dirname, 'src/app'),
                loader: 'raw-loader'
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        new EncodingPlugin({
            encoding: 'UTF-8'
        })
    ],
};
