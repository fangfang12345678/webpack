const path = require('path')
const {
    join
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: join(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: join(__dirname, "public/index.html"),
        filename: "index.html",
    })],
    devServer: {
        port: 3000,
        open: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader", "css-loader"
            ]
        }]
    }
}