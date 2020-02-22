const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  {
                    loader: 'file-loader'
                  }
                ],
            }
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: './src/static/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    watchOptions: {
        aggregateTimeout: 500,
        ignored: ['node_modules/**'],
        poll: 1000
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 8000,
        hot: true,
    },
};
