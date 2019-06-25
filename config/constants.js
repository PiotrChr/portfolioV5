const constants = {
    paths: {
        APP: 'app/src',
        SERVER: 'server/src',
        CONFIG: 'config/',
        APP_DIST: 'app/dist',
        SERVER_DIST: 'server/dist',
        RESOURCES: 'resources/'
    },
    env: {
        SERVER_BASE_URL: process.env.SERVER_BASE_URL,
        API_URL: process.env.API_URL
    },
    app: {
        componentScopes: {
            app: 'app'
            home: 'home',
            blog: 'blog'
        },
        statusTypes: {
            error: 'error',
            success: 'success',
            info: 'info',
            warning: 'warning'
        }
    }
};

constants.paths.MODULES = [
    constants.paths.APP,
    constants.paths.SERVER,
    'node_modules'
];

module.exports = constants;
