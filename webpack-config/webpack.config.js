const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CodeDecoratePlugin = require('./plugin/CodeDecoratePlugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.tpl.html',
            chunks: 'all'
        }),
        new CodeDecoratePlugin()
    ],
    output: {
        path: path.resolve('../', 'dist'),
        filename: 'demo.js',
    },
};