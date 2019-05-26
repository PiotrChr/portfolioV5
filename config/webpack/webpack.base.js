const path = require('path');
const paths = require('../constants').paths;

module.exports = {
    node: {
        fs: 'none',
    },
    resolve: {
        alias: {
            config: path.resolve(paths.CONFIG, 'config'),
            app: path.resolve('app'),
            server: path.resolve('server'),
        },
    },
};
