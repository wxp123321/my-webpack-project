const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')
const path = require('path')

const baseConfig = {
    entry: {
        react: 'react'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // {
                    //     //url useable
                    //     loader: 'style-loader',
                    //     options: {
                    //         //打包到指定的标签
                    //         //insertInto: '#app',
                    //         //打包到一个style标签
                    //         singleton: true,
                    //         //transform: './css.transform.js',
                    //         //sourceMap: true
                    //     }
                    // },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpack(path.resolve(__dirname, 'dist')),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

const generatePage = function ({
    title = '',
    entry = '',
    template = './src/index.html',
    name = '',
    chunks = []
} = {}) {
    return {
        entry,
        plugins: [
            new HtmlWebpackPlugin({
                chunks,
                template,
                title,
                filename: name + '.html'
            })
        ]
    }
}

const pages = [
    generatePage({
        title: 'page A',
        entry: {
            a: './src/pages/a'
        },
        name: 'a',
        chunks: ['react', 'a']
    }),

    generatePage({
        title: 'page B',
        entry: {
            b: './src/pages/b'
        },
        name: 'b',
        chunks: ['react', 'b']
    }),

    generatePage({
        title: 'page C',
        entry: {
            c: './src/pages/c'
        },
        name: 'c',
        chunks: ['react', 'c']
    })
]

console.log(pages.map(page => merge(baseConfig, page)))

module.exports = pages.map(page => merge(baseConfig, page))