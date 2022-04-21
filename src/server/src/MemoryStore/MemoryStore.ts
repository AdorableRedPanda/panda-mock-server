import { RequestMock, RequestSignature } from '../../../types';
import { MocksStore } from './MocksStore';
import { isEqual, removeFrom, upsertIn } from './utils';

export class MemoryStore implements MocksStore {
    #mocks: RequestMock[] = [
        { path:'/1', method: 'GET', pattern: 'hi there!', variables: [] },
        { path:'/2', method: 'GET', pattern: 'hello world', variables: [] },
        { path:'/3', method: 'GET', pattern: 'hi!', variables: [] }
    ];

    getList(): RequestMock[] {
        return this.#mocks;
    }

    getMock(req: RequestSignature): RequestMock {
        return this.#mocks.filter((mock) => isEqual(mock, req))[0];
    }

    upsertMock(mock: RequestMock) {
        this.#mocks = upsertIn(mock, this.#mocks);
    }

    removeMock(req: RequestSignature) {
        this.#mocks = removeFrom(req, this.#mocks);
    }

}