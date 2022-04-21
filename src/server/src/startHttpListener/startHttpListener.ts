import express from 'express';
import bodyParser from 'body-parser';
import { MOCKS_PORT } from '../../../constants';
import { RequestHandler } from '../MockService/types';
import cors from 'cors';

export const startHttpListener = (handler: RequestHandler) => {
    const app = express();

    app.use(cors({ maxAge: 600 }));

    app.use(bodyParser.json());

    app.all('/*', (req, res) => {
        console.log(req.method);
        try {
            const mocked = handler.onRequest(req);
            res.status(mocked.code).send(mocked.data);
        } catch (e) {
            res.status(500).send(`cannot handle request: ${e}`);
        }
    });

    app.listen(MOCKS_PORT, () => console.log(`mock server is listening port ${MOCKS_PORT}`));
};