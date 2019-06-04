const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack/webpack.base');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
    ...baseConfig,
    entry: './server/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'server', 'dist'),
        filename: 'index.js',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};
