import { ResponseMock, RequestSignature } from '../../../types';
import { MocksStore } from './MocksStore';
import { isMatch, removeFrom, upsertIn } from './utils';

export class MemoryStore implements MocksStore {
    #mocks: ResponseMock[] = [];

    getList(): ResponseMock[] {
        return this.#mocks;
    }

    getMock(req: RequestSignature): ResponseMock | undefined {
        return this.#mocks.find((mock) => isMatch(mock, req));
    }

    upsertMock(mock: ResponseMock) {
        this.#mocks = upsertIn(mock, this.#mocks);
    }

    removeMock(req: RequestSignature) {
        this.#mocks = removeFrom(req, this.#mocks);
    }

}