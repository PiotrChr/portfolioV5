const path = require('path');
const paths = require('../constants').paths;
const nodeExternals = require('webpack-node-externals');
const loaders = require('./loaders');
const plugins = require('./plugins');
const resolvers = require('./resolvers');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
    name: 'app:server',
    mode: NODE_ENV,
    target: 'node',
    entry: {
        server: [
            require.resolve('core-js/stable'),
            require.resolve('regenerator-runtime/runtime'),
            path.resolve(paths.APP, 'app.server.tsx'),
        ],
    },
    externals: [
        nodeExternals({
            whitelist: /\.css$/,
        }),
    ],
    output: {
        path: path.resolve(paths.APP_DIST),
        filename: 'app.server.js',
        publicPath: paths.RESOURCES,
    },
    resolve: resolvers,
    plugins: [...plugins.shared, ...plugins.server],
    module: {
        rules: loaders.server,
    },
    stats: {
        colors: true,
    },
};
