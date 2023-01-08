const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
// const initOpenFile = require('./tool/openInEditor');
const ip = require('internal-ip');
const open = require('opn');
const path = require('path');
let port = process.argv[3] || '8889';
let host = ip.v4.sync();
// console.log(webpackConfig);
const compiler = webpack(webpackConfig);
let server = new WebpackDevServer(compiler, {
    hot: true,
    open: true,
    static: {
        directory: path.join(__dirname, '../'),
        watch: true
    },
    port: port,
    historyApiFallback: {
        disableDotRule: true,
        rewrites: [
            {
                from: new RegExp('/'),
                to: 'src/public/index.tpl.html'
            }
        ]
    },
    host: host,
});
// initOpenFile(rootPath);
server.startCallback(err => {
    console.log('跑起来了', err);
});
