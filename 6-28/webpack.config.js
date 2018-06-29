var path = require('path')
//在webpack4中这个插件不能用 所以用了mini-css-extract-plugin这个插件
//var ExtracTextWebpackPlugin = require('extract-text-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")



module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    // {
                    //     //url useable
                    //     loader: 'style-loader',
                    //     options: {
                    //         //打包到指定的标签
                    //         //insertInto: '#app',
                    //         //打包到一个style标签
                    //         singleton: true,
                    //         transform: './css.transform.js'
                    //     }
                    // },
                    //使用MiniCssExtractPlugin.loader再使用style-loader会使import的css文件类加载不出来
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            //是否压缩css
                            minimize: true,
                            modules: true,
                            //css类的名字命名方式
                            localIdentName: '[path][name]_[local]_[hash:base64:5]'
                        }
                        //file-loader会产生多个link标签 所以不常使用
                        //loader: 'file-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}