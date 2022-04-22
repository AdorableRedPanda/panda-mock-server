import { Func, GetterFunc, RequestInternal, RequestLog, ResponseInternal } from '../../../types';

export interface RequestLogger {
    onRequest: Func<[RequestInternal, ResponseInternal]>;
}

export interface LogsProvider {
    getHistory: GetterFunc<RequestLog[]>;
    subscribe: Func<Func<RequestLog>>;
}