const webpack = require('webpack');
const rimraf = require('rimraf');

const clientConfig = require('../config/webpack/webpack.app.client')
const serverConfig = require('../config/webpack/webpack.app.server')

const paths = require('../config/constants').paths;
const { logMessage, compilerPromise, sleep } = require('./utils');

const { choosePort } = require('react-dev-utils/WebpackDevServerUtils');

const HOST = process.env.HOST || 'http://localhost';

const generateStaticHTML = async () => {
    const nodemon = require('nodemon');
    const fs = require('fs');
    const puppeteer = require('puppeteer');
    const PORT = await choosePort('localhost', 8505);

    process.env.PORT = PORT;

    const script = nodemon({
        script: `${paths.APP_DIST}/server.js`,
        ignore: ['*'],
    });

    script.on('start', async () => {
        try {
            // TODO: add try/wait/retry here instead of just generally waiting for 2000 ms
            await sleep(2000);
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`${HOST}:${PORT}`);
            const pageContent = await page.content();
            fs.writeFileSync(`${paths.APP_DIST}/index.html`, pageContent);
            await browser.close();
            script.emit('quit');
        } catch (err) {
            script.emit('quit');
            console.log(err);
        }
    });

    script.on('exit', (code) => {
        process.exit(code);
    });

    script.on('crash', () => {
        process.exit(1);
    });
};

const build = async () => {
    rimraf.sync(paths.APP_DIST);
    // rimraf.sync(paths.serverBuild);

    const multiCompiler = webpack([clientConfig, serverConfig]);

    const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'app:client');
    const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'app:server');

    const clientPromise = compilerPromise('app:client', clientCompiler);
    const serverPromise = compilerPromise('app:server', serverCompiler);

    serverCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log(stats.toString(serverConfig.stats));
            return;
        }
    });

    clientCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log(stats.toString(clientConfig.stats));
            return;
        }
    });

    // wait until client and server is compiled
    try {
        await serverPromise;
        await clientPromise;
        await generateStaticHTML();
        logMessage('Done!', 'info');
    } catch (error) {
        logMessage(error, 'error');
    }
};

build();
