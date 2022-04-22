import { Func, RequestInternal, ResponseInternal } from '../../../types';

export interface RequestHandler {
    onRequest: Func<RequestInternal, ResponseInternal>;
}