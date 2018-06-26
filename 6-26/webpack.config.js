var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/app.ts'
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                "removeAttributeQuotes": true,
                "removeComments": true,
                "removeEmptyAttributes": true,
            }
        })
    ]
}