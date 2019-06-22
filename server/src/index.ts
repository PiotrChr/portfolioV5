require('./config/env');
import express from 'express';
import cors from 'cors';
import routes from './router/routes';

const app = express();
const port: number = 8000;

const allowedOrigins = ['http://localhost:8000', 'http://localhost:8500'];
app.use(
    cors({
        origin: function(origin, callback) {
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
