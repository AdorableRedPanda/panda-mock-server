import { Func, LogsProvider, RequestLogger } from '../types';
import { RequestLog, Request, Response, RequestSignature, MockPattern } from '../../types';

const buildRequestLog = (req: Request, response: Response): RequestLog => {
    const timestamp = (new Date()).toLocaleTimeString();
    return ({
        timestamp,
        method: req.method,
        path: req.path,
        params: req.queryParams,
        body: req.body,
        response
    });
};

export class LoggingService implements RequestLogger, LogsProvider {
    #logs: RequestLog[] = [];
    #subscribers: Func<RequestLog>[] = [];

    getHistory(): RequestLog[] {
        return this.#logs;
    }

    onRequest([req, res]: [RequestSignature, MockPattern]): void {
        const log = buildRequestLog(req, res);
        this.#logs.push(log);
        this.#subscribers.forEach(cb => cb(log));
    }

    subscribe(cb: Func<RequestLog>): void {
        this.#subscribers.push(cb);
    }
}