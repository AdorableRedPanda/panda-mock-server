import { Request, RequestMock } from '../../types';
import { Response } from '../../types/Response';

export interface RequestsHandler {
    getResponse: <T>(req: Request<T>) => Response<unknown>;
    getMocksList: () => RequestMock[];
}