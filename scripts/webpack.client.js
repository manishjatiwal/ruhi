// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Resolve = require('path').resolve
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin
const webpack = require('webpack')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
    entry: {
        app: Resolve(__dirname, '..', 'src/client/index.tsx')
    },
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.[tj]sx?$/,
                use: { loader: 'ts-loader' }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '/' }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: false,
                default: false,
                external: {
                    chunks: 'all',
                    name: 'external',
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },
    output: {
        chunkFilename: 'js/[name]-[chunkhash].js',
        clean: true,
        filename: 'js/[name]-[chunkhash].js',
        path: Resolve(__dirname, '..', 'dist/client'),
        publicPath: '/'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: Resolve(__dirname, '..', 'src/assets'),
                    to: Resolve(__dirname, '..', 'dist/client/assets')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[chunkhash].css',
            chunkFilename: 'css/[name]-[chunkhash].css'
        }),
        new WebpackManifestPlugin({
            fileName: Resolve(__dirname, '..', 'src/server/resources.json'),
            prettyPrint: true,
            publicPath: '/'
        }),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false
        })
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({})]
    }
}
