var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './src');
var CSS_DIR = path.resolve(__dirname, './src/scss/laboratoria.scss');
const extractStyles = new ExtractTextPlugin({
    filename: '[name].css'
});

var config = {
    entry: {"bundle": APP_DIR,"bundle.min": APP_DIR , "laboratoria": CSS_DIR},
    output: {
        path: BUILD_DIR,
        filename: "[name].js",
        publicPath: '/public/'

    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
            {
                test: /react-icons\/(.)*(.js)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: extractStyles.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: extractStyles.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8080
    },
    plugins: [
        extractStyles,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = config;
