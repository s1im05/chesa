const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './js/main.js'
    },
    output: {
        filename: './dist/[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use:[{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[hash].[ext]'
                }
            },
            {
                test: /icons\.(svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: 'ui/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[hash].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/[name]-styles.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
