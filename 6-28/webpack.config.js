var path = require('path')
var webpack = require('webpack')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')


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
    resolve: {
        alias: {
            //当用lib中的JS库时
            jquery$: path.resolve(__dirname, 'src/lib/jquery.min.js')
        }
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
                            localIdentName: '[local]'
                        }
                        //file-loader会产生多个link标签 所以不常使用
                        //loader: 'file-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: [
                                //前缀
                                //require('autoprefixer')(),
                                //使所以图片合成为一张图（雪碧图）
                                require('postcss-sprites')({
                                    spritePath: 'dist/asset/img',
                                    retina: true
                                }),
                                //未来的css语法 postcss-cssnext包括了autoprefixer的功能
                                require('postcss-cssnext')()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            //处理图片
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    //使用file-loader来
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './asset/img',
                            useRelativePath: true
                        }
                    },
                    //使用url-loader来把图片变为base64 img-loader和postcss-sprites冲突
                    // {
                    //     loader: 'url-loader',
                    //     //小于30K的图片变为base64
                    //     options: {
                    //         limit: 30000
                    //     }
                    // }
                    //使用img-loader来压缩图片 webpack4中并不是很好用
                    // {
                    //     loader: 'img-loader'
                    // },
                    //使用image-webpack-loader压缩图片
                    // {
                    //     loader: 'image-webpack-loader'
                    // }
                ]
            },
            //处理字体文件
            {
                test: /\.(eot|woff2?|ttf|svg$)/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: path.resolve(__dirname, 'src/app.js'),
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            $: 'jquery'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        //当使用npm安装的js库时
        // new webpack.ProvidePlugin({
        //     $: 'jquery'
        // })
        //此插件不支持webpack4 已经一年没有更新了
        // new PurifyCSS({
        //     paths: glob.sync([
        //         path.join(__dirname, './*.html'),
        //         path.join(__dirname, './src/*.js')
        //     ])
        // })
    ]
}