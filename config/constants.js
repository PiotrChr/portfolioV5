const constants = {
    paths: {
        APP: 'app/src',
        SERVER: 'server/src',
        CONFIG: 'config/',
        APP_DIST: 'app/dist',
        SERVER_DIST: 'server/dist',
        RESOURCES: 'resources/'
    },
};

constants.paths.MODULES = [
    constants.paths.APP,
    constants.paths.SERVER,
    'node_modules'
];

module.exports = constants;
