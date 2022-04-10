import express from 'express';
import bodyParser from 'body-parser';
import { WsLogger } from '../types';
import { buildRequest } from './buildRequest';
import { Method, Request, RequestLog, Response } from '../../types';
import cors from 'cors';
import { MOCKS_PORT } from '../../constants';

const buildLog = (req: Request, response: Response<unknown>): RequestLog => {
    const timestamp = (new Date()).toLocaleTimeString();
    return { response, ...req, timestamp };
};

export const initializeMockServer = (
    logRequest: WsLogger,
    getResponse: <T>(req: Request<T>) => Response<string>
) => {
    const app = express();

    app.use(cors({ maxAge: 600 }));

    app.use(bodyParser.json());

    app.all('/*', (req, res) => {
        try {
            const preparedReq = buildRequest(req.path, req.method as Method, req.body, req.query);
            const response = getResponse(preparedReq);
            res.status(response.code).send(response.data);

            logRequest(buildLog(preparedReq, response));
        } catch (e) {
            console.log(e);
            res.status(500).send('unsupported body type');
        }
    });

    app.listen(MOCKS_PORT, () => console.log(`mock server is listening port ${MOCKS_PORT}`));
};