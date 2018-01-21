const path = require('path');

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
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                trimCustomFragments: true,
                collapseWhitespace: true
            }
        })
    ]
};