const path = require('path');
const paths = require('../constants').paths;

module.exports = {
    node: {
        fs: false,
    },
    resolve: {
        alias: {
            '@Config': path.resolve(paths.CONFIG, 'config'),
            '@App': path.resolve('app', 'src'),
            '@Server': path.resolve('server', 'src'),
        },
    },
};
