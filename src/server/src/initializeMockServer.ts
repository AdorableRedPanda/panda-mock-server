import express from 'express';
import bodyParser from 'body-parser';
import { WsLogger } from '../types';
import { buildRequest } from './buildRequest';
import { Method, Request, RequestLog, Response } from '../../types';

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

    app.use(bodyParser.text());

    app.all('/*', (req, res) => {
        const preparedReq = buildRequest(req.path, req.method as Method, req.body, req.query);
        console.log(req.path, req.method, req.body);
        const response = getResponse(preparedReq);
        res.status(response.code).send(response.data);

        logRequest(buildLog(preparedReq, response));
    });

    app.listen(mockedPort, () => console.log(`mock server is listening port ${mockedPort}`));
};