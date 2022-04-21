import { MocksStore } from '../MemoryStore';
import { RequestHandler } from './types';
import { RequestLogger } from '../LoggingService';
import { RequestExpress, Response } from '../../../types';

export class MockService implements RequestHandler {
    #logger: RequestLogger;
    #store: MocksStore;
    
    constructor(logger: RequestLogger, store: MocksStore) {
        this.#logger = logger;
        this.#store = store;
    }

    onRequest(req: RequestExpress): Response {
        let res;
        try {
            const pattern = this.#store.getMock(req);
            res = { code: 200, data: { pattern } };
        } catch (e) {
            res = { code: 404, data: { message: 'request is not mocked' } };
        }

        this.#logger.onRequest([req, res]);
        return res;
    }

}