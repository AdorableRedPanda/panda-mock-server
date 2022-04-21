import { Func, LogsProvider, RequestLogger } from '../types';
import { RequestLog, Request, Response } from '../../types';

const buildRequestLog = (req: Request, response: Response): RequestLog => {
    const timestamp = (new Date()).toLocaleTimeString();
    return ({ ...req, timestamp, response });
};

export class LoggingService implements RequestLogger, LogsProvider {
    #logs: RequestLog[] = [];
    #subscribers: Func<RequestLog>[] = [];

    getHistory(): RequestLog[] {
        return this.#logs;
    }

    onRequest([req, res]: [Request, Response]): void {
        const log = buildRequestLog(req, res);
        this.#logs.push(log);
        this.#subscribers.forEach(cb => cb(log));
    }

    subscribe(cb: Func<RequestLog>): void {
        this.#subscribers.push(cb);
    }
}