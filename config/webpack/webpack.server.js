const path = require('path');
const paths = require('../constants').paths;
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const loaders = require('./loaders').server;
const resolvers = require('./resolvers').server;
const { NODE_ENV = 'production' } = process.env;

module.exports = {
    entry: {
        server: [
            path.resolve(paths.SERVER, 'index.ts')
        ]
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(paths.SERVER_DIST),
        filename: 'server.js',
    },
    externals: [nodeExternals()],
    module: { rules: loaders },
    resolve: resolvers,
};
