const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    module: {
        loaders: [
            /**
             * Compile Sass to CSS
             */
            {
                test: /\.less$/,
                /**
                 * Extract result in an extra file
                 */
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        }, {
                            loader: "less-loader"
                        }
                    ],
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash:8].bundle.css'),
        /**
         * Uglify/minify scripts
         */
        new UglifyJSPlugin()
    ]
});