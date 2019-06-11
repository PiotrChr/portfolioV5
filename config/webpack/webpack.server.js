const path = require('path');
const paths = require('../constants').paths;
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack/webpack.base');
const loaders = require('./loaders').server;
const resolvers = require('./resolvers').server;
const { NODE_ENV = 'production' } = process.env;

module.exports = {
    ...baseConfig,
    entry: path.resolve(paths.SERVER, 'index.ts'),
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'server', 'dist'),
        filename: 'index.js',
    },
    externals: [nodeExternals()],
    module: loaders,
    resolve: resolvers,
};
