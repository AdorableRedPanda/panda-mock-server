import { Func, GetterFunc, RequestExpress, RequestLog, Response } from '../../../types';

export interface RequestLogger {
    onRequest: Func<[RequestExpress, Response]>;
}

export interface LogsProvider {
    getHistory: GetterFunc<RequestLog[]>;
    subscribe: Func<Func<RequestLog>>;
}