const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const deepmerge = require('deepmerge');

const appConfig = require('/webpack.app');

const DEV = process.env.NODE_ENV === 'development'

const config = {
    env: {
        ...config.env,
        something: 'asd'
    },
    distDirectory: path.resolve('./src/app/'),
    webpack: config => {
        config = deepmerge({}, config, appConfig);

        return config
    }
};

module.exports = withTypescript(config);