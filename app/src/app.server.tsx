// import React from 'react';
import path from 'path';
import * as express from 'express';
import chalk from 'chalk';
import { paths } from '@Config/constants';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
import { configureStore } from '@App/store/store';
import createHistory from '@App/store/history';

import errorHandler from './server/middleware/errorHandler';
import serverRenderer from './server/middleware/serverRenderer';

require('dotenv').config();

const app = express.default();

app.use(express.static(path.resolve(paths.RESOURCES)));
app.use(express.static(path.resolve(paths.APP_DIST)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const addStore = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction | undefined
): void => {
    const history = createHistory({ initialEntries: [req.url] });
    res.locals.store = configureStore({ history });
    if (typeof next !== 'function') {
        throw new Error('Next handler is missing');
    }
    next();
};

app.use(addStore);

const manifestPath = path.resolve(paths.APP_DIST);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);

app.listen(process.env.PORT || 8500, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: 🌎 http://localhost:${process.env.PORT || 8500}`)
    );
});

export default app;
