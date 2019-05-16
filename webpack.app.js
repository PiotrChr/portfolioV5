const path = require('path');

module.exports = {
    node: {
        fs: 'none'
    },
    resolve: {
        'config': path.resolve(process.env.CONFIG_DIR, 'config')
    }
};