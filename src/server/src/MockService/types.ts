import { Func, RequestExpress, Response } from '../../../types';

export interface RequestHandler {
    onRequest: Func<RequestExpress, Response>;
}