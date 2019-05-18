const path = require('path');

module.exports = {
    node: {
        fs: 'none'
    },
    resolve: {
        alias: {
            'config': path.resolve(process.env.CONFIG_DIR, 'config'),
            'app': path.resolve('app'),
            'server': path.resolve('server')
        }
    }
};