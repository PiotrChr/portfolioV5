const path = require('path');
const paths = require('paths')

module.exports = {
    name: 'app:client',
    target: 'web',
    node: {
        fs: 'none'
    },
    entry: {
        bundle: [
            ''
        ]
    },
    resolve: {
        alias: {
            'config': path.resolve(process.env.CONFIG_DIR, 'config'),
            'app': path.resolve('app'),
            'server': path.resolve('server')
        }
    }
};