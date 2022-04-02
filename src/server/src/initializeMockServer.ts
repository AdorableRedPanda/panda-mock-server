import express from 'express';
import { LoggerCb } from '../types';
import { buildRequest } from './buildRequest';
import { Request } from '../../types';
import { Response } from '../../types/Response';

const mockedPort = process.env.APP_MOCKS_PORT;

export const initializeMockServer = (
    onRequest: LoggerCb,
    getResponse: <T>(req: Request<T>) => Response<string>
) => {
    const app = express();

    app.all('/*', (req, res) => {
        const preparedReq = buildRequest(req.path, req.method, req.body, req.query);
        const response = getResponse(preparedReq);
        res.status(response.code).send(response.data);
        onRequest(preparedReq, response);
    });

    app.listen(mockedPort, () => console.log(`mock server is listening port ${mockedPort}`));
};