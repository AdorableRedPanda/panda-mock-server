import { PatternsStore, RequestHandler, RequestLogger } from '../types';
import { Request, Response } from '../../types';

export class MockService implements RequestHandler {
    #logger: RequestLogger;
    #store: PatternsStore;
    
    constructor(logger: RequestLogger, store: PatternsStore) {
        this.#logger = logger;
        this.#store = store;
    }

    onRequest(req: Request): Response<any> {
        let res;
        try {
            const pattern = this.#store.getMock(req);
            res = { code: 200, data: pattern };
        } catch (e) {
            res = { code: 404, data: 'request is not mocked' };
        }

        this.#logger.onRequest([req, res]);
        return res;
    }

}