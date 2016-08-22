var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'app': './app/index.js',
        'landing' : './landing/index.jsx'
    },
    output: {
        path: path.join(__dirname, '/public'),
        filename: "[name].build.js",
        publicPath: '/'
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: [path.join(__dirname, 'app'), path.join(__dirname, 'landing'), path.join(__dirname, 'common')]
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader", {
                    allChunks: true
                })
            },

            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }

        ]
    }
}
