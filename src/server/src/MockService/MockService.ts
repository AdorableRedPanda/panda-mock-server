import { MocksStore } from '../MemoryStore';
import { RequestHandler } from './types';
import { RequestLogger } from '../LoggingService';
import { RequestInternal, ResponseInternal } from '../../../types';
import { buildResponse } from './utils';

export class MockService implements RequestHandler {
    #logger: RequestLogger;
    #store: MocksStore;
    
    constructor(logger: RequestLogger, store: MocksStore) {
        this.#logger = logger;
        this.#store = store;
    }

    onRequest(req: RequestInternal): ResponseInternal {
        const mock = this.#store.getMock(req);
        const res = buildResponse(req, mock);

        this.#logger.onRequest([req, res]);
        return res;
    }
}