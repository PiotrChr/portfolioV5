const webpack = require('webpack');

const rimraf = require('rimraf');
const clientConfig = require('../config/webpack/webpack.app.client')
// const serverConfig = require('../config/webpack/webpack.app.server')
const paths = require('../config/constants').paths;

const { logMessage } = require('./utils');

const build = async () => {
    // rimraf.sync(paths.APP_DIST);
    // rimraf.sync(paths.SERVER_DIST);

    // const [clientConfig] = webpackConfig;
    const webpackCompiler = webpack([clientConfig]);

    const clientCompiler = webpackCompiler.compilers.find((compiler) => compiler.name === 'app:client');
    // const clientPromise = compilerPromise('client', clientCompiler);

    // clientCompiler.watch({}, (error, stats) => {
    //     if (!error && !stats.hasErrors()) {
    //         console.log(stats.toString(clientConfig.stats));
    //         return;
    //     }
    // });

    // wait until client and server is compiled
    try {
        clientCompiler.run();
        logMessage('Done!', 'info');
        process.exit();
    } catch (error) {
        logMessage(error, 'error');
    }
};

build();
