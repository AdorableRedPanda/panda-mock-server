import { Request, RequestMock, Response } from '../../types';

export interface RequestsHandler {
    getResponse: <T>(req: Request<T>) => Response<unknown>;
    getMocksList: () => RequestMock[];
    setMock: (mock: RequestMock) => void;
}