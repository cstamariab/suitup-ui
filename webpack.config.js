var path = require('path');
var webpack = require('webpack');
var chalk = require('chalk');
 
module.exports = {
    context: __dirname,
    cache: true,
    entry: ['./src/components/index.jsx'],
    output: {
        path: './dist',
        filename: 'suitup.toolkit.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                exclude: '/node_modules'
            },
            {
                test:/\.less$/,
                exclude:'/node_modules',
                loader:"style!css!less"
            } 
        ]
    },
    resolve: {
        extensions: ['', '.js','.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          sourcemap: false,
          compress: {
            warnings: false,
          }
        })
    ]
};