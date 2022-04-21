import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MOCKS_PORT } from '../../constants';
import { RequestHandler } from '../types';

export const startHttpListener = (handler: RequestHandler) => {
    const app = express();

    app.use(cors({ maxAge: 600 }));

    app.use(bodyParser.json());

    app.all('/*', (req, res) => {
        try {
            const mocked = handler.onRequest(req);
            res.status(mocked.code).send(mocked.data);
        } catch (e) {
            console.log(e);
            res.status(500).send('cannot handle message');
        }
    });

    app.listen(MOCKS_PORT, () => console.log(`mock server is listening port ${MOCKS_PORT}`));
};