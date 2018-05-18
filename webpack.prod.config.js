const config = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    })
);

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
    })
);

module.exports = config;
