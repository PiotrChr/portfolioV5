const path = require('path');
const paths = require('../constants').paths;
const nodeExternals = require('webpack-node-externals');
const loaders = require('./loaders');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
    name: 'app:server',
    mode: NODE_ENV,
    target: 'node',
    entry: {
        server: [
            require.resolve('core-js/stable'),
            require.resolve('regenerator-runtime/runtime'),
            path.resolve(paths.SERVER, 'index.ts'),
        ],
    },
    externals: [
        nodeExternals({
            whitelist: /\.css$/,
        }),
    ],
    output: {
        path: paths.SERVER_DIST,
        filename: 'app.server.js',
        publicPath: paths.RESOURCES,
    },
    resolve: {
        extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.tsx', '.css'],
        modules: paths.MODULES,
    },
    plugins: [...plugins.shared, ...plugins.server],
    module: {
        rules: loaders.server,
    },
    stats: {
        colors: true,
    },
};
