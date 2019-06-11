const path = require('path');
const paths = require('../constants').paths;

const client = {
    extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.tsx', '.css'],
    modules: paths.MODULES,
    alias: {
        '@Config': path.resolve(paths.CONFIG),
        '@App': path.resolve('app', 'src'),
        '@Server': path.resolve('server', 'src'),
    },
};

const server = {
    extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.tsx'],
    modules: paths.MODULES,
    alias: {
        '@Config': path.resolve(paths.CONFIG),
        '@App': path.resolve('app', 'src'),
        '@Server': path.resolve('server', 'src'),
    },
};

module.exports = {
    client,
    server,
};
