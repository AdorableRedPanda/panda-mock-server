import express from 'express';
import { WsLogger } from '../types';
import { buildRequest } from './buildRequest';
import { Request, RequestLog, Response } from '../../types';

const mockedPort = process.env.APP_MOCKS_PORT;

const buildLog = (req: Request, response: Response<unknown>): RequestLog => {
    const timestamp = (new Date()).toLocaleTimeString();
    return { response, ...req, timestamp };
};

export const initializeMockServer = (
    logRequest: WsLogger,
    getResponse: <T>(req: Request<T>) => Response<string>
) => {
    const app = express();

    app.all('/*', (req, res) => {
        const preparedReq = buildRequest(req.path, req.method, req.body, req.query);
        const response = getResponse(preparedReq);
        res.status(response.code).send(response.data);

        logRequest(buildLog(preparedReq, response));
    });

    app.listen(mockedPort, () => console.log(`mock server is listening port ${mockedPort}`));
};