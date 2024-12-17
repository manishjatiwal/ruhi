const nodeExternals = require('webpack-node-externals')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')
const config = require('config')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
    entry: path.resolve(__dirname, '..', 'src/server/index.ts'),
    externals: [nodeExternals()],
    mode,
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.[tj]sx?$/,
                use: { loader: 'ts-loader' }
            },
            {
                test: /\.css$/,
                use: 'null-loader'
            }
        ]
    },
    output: {
        clean: true,
        filename: 'index.js',
        path: path.resolve(__dirname, '..', 'dist/server')
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.DefinePlugin({
            __CLIENT__: false,
            __SERVER__: true,
            __GCP_API_KEY__: JSON.stringify(config.gcpApiKey)
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({})]
    },
    target: 'node'
}
