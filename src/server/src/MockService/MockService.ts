import { RequestHandler } from './types';
import { RequestInternal, ResponseInternal } from '../../../types';
import { buildResponse } from './utils';
import { LoggingService } from '../LoggingService';
import { MemoryStore } from '../MemoryStore';

export class MockService implements RequestHandler {
    #logger: LoggingService;
    #store: MemoryStore;
    
    constructor(logger: LoggingService, store: MemoryStore) {
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