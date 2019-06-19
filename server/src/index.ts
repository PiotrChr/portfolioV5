require('./config/env');
import express from 'express';
import routes from './router/routes';

const app = express();
const port: number = 8000;

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
