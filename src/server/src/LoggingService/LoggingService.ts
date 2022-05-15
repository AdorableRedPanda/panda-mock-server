import { RequestLog, ResponseInternal, Func, RequestInternal } from '../../../types';

export class LoggingService {
    #logs: RequestLog[] = [];
    #subscribers: Func<RequestLog>[] = [];

    getHistory(): RequestLog[] {
        return this.#logs.sort((a, b) => a.timestamp > b.timestamp ? -1 : 1);
    }

    onRequest([req, response]: [RequestInternal, ResponseInternal]): void {
        const log = { ...req, response };
        this.#logs.push(log);
        this.#subscribers.forEach((cb) => cb(log));
    }

    subscribe(cb: Func<RequestLog>): void {
        this.#subscribers.push(cb);
    }
}