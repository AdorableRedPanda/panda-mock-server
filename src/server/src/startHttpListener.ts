import express, { Request as ExpressRequest } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MOCKS_PORT } from '../../constants';
import { RequestHandler } from '../types';
import { Method, Request } from '../../types';

const getPrepareRequest = ({ method, body, path, query }: ExpressRequest): Request => (
    { method: method as Method, path, params: query || {}, body: body || {} }
);

export const startHttpListener = (handler: RequestHandler) => {
    const app = express();

    app.use(cors({ maxAge: 600 }));

    app.use(bodyParser.json());

    app.all('/*', (req, res) => {
        try {
            const mocked = handler.onRequest(getPrepareRequest(req));
            res.status(mocked.code).send(mocked.data);
        } catch (e) {
            res.status(500).send(`cannot handle request: ${e}`);
        }
    });

    app.listen(MOCKS_PORT, () => console.log(`mock server is listening port ${MOCKS_PORT}`));
};