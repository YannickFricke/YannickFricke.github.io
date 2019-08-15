'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/index.tsx', './src/index.scss'],
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: '/',
    },

    mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
    context: path.resolve(__dirname),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.s?css$/,
                loader: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'dev',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(svg|eot|png|woff2?|ttf)$/,
                loader: 'file-loader',
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.scss',
            '.css'
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: {
            index: 'index.html',
        }
    }
};
