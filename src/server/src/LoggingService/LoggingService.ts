import { LogsProvider, RequestLogger } from './types';
import { RequestLog, Response, Func, RequestExpress } from '../../../types';

const buildRequestLog = ({ body, query, method, path }: RequestExpress, response: Response): RequestLog => {
    const timestamp = (new Date()).toLocaleTimeString();
    return ({ body, query, method, path, timestamp, response });
};

export class LoggingService implements RequestLogger, LogsProvider {
    #logs: RequestLog[] = [];
    #subscribers: Func<RequestLog>[] = [];

    getHistory(): RequestLog[] {
        return this.#logs;
    }

    onRequest([req, res]: [RequestExpress, Response]): void {
        const log = buildRequestLog(req, res);
        this.#logs.push(log);
        this.#subscribers.forEach(cb => cb(log));
    }

    subscribe(cb: Func<RequestLog>): void {
        this.#subscribers.push(cb);
    }
}