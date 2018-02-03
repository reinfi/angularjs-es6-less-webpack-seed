const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './index.js'
    },    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].bundle.js'
    },
    module: {
        loaders: [
            /**
             * Transpile ES5+ to ES5
             */
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                trimCustomFragments: true,
                collapseWhitespace: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => {
                return module.context && module.context.includes('node_modules');
            }
        })
    ]
};