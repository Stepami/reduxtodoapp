const path = require('path');
const express = require("express");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: [
            path.resolve(__dirname, "dist")
        ],
        publicPath: "/",
        before: function (app, _server, _compiler) {
            app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
        },
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html" // исходный html
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};