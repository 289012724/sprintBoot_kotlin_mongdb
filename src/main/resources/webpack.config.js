const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devtool: "eval-source-map",
    entry: {
        main: __dirname + "/app/index.js",
        loginJs: __dirname + "/app/login.js"
    },
    output: {
        path: __dirname+"/static",
        filename: "[name].js"
    },
    devServer: {
        contentBase: "./static",
        historyApiFallback: true,
        inline: true
    }
};
