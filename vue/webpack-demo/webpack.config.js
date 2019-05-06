const filePath = require('path');
const webpackge = require('webpack');

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins:[
        new webpackge.HotModuleReplacementPlugin()
    ]
};