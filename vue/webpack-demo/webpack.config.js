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
    plugins: [
        new webpackge.HotModuleReplacementPlugin({
            template:filePath.join(__dirname,'/src/index.html'),
            filename:'index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(jpg|png|gif|svg)$/, use:'url-loader?limit=10&name=[hash:8]-[name].[ext]'},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'}
        ]
    }
};