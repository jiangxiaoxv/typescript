
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path")
const CopyWebapckPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.ts',
    mode: process.env.NODE_ENV,
    output: {
        filename: '[name]_[contenthash:8].js',
        path: path.resolve(process.cwd(), "dist"),
        clean: true,
        // webpack打包环境，告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false,
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // static: 'errors-only', // 控制台有错误的时候才会打印
        compress: false, // 不启动压缩
        host: 'localhost',
        port: 8080,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            compress: false,
            inject: 'body'
        }),
        new CopyWebapckPlugin([
            {
                from: path.join(__dirname, '../src/modules/handle-title.js'),
                to: path.resolve(__dirname, '../dist')
            }
        ])
    ]
}