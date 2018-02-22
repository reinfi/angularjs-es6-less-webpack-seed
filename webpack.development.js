const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
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
            /**
             * Compile Sass to CSS
             */
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        stats: 'errors-only'
    }
});