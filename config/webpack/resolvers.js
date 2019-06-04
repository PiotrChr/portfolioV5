const path = require('path');
const paths = require('../constants').paths;

const resolvers = {
    extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.tsx', '.css'],
    modules: paths.MODULES,
    alias: {
        '@Config': path.resolve(paths.CONFIG, 'config'),
        '@App': path.resolve('app','src'),
        '@Server': path.resolve('server', 'src'),
    }
}

module.exports = resolvers;
