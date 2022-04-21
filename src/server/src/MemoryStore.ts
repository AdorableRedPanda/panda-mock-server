import { PatternsStore } from '../types';
import { MockPattern, RequestMock, RequestSignature } from '../../types';

const isEqual = (req: RequestSignature, mock: RequestSignature): boolean => mock.method === req.method && mock.path === req.path;

const removeFrom = <T extends RequestSignature>(req: RequestSignature, mocks: T[]): T[] => mocks.filter((mock) => !isEqual(mock, req));

const upsertIn = ({ path, method, pattern }: RequestMock, mocks: RequestMock[]): RequestMock[] => {
    const others = removeFrom({ path, method }, mocks);
    return [{ path, method, pattern }, ...others];
};

export class MemoryStore implements PatternsStore {
    #mocks: RequestMock[] = [
        { path:'/1', method: 'GET', pattern: { 'mocks': 'hi there!' } },
        { path:'/2', method: 'GET', pattern: { 'mocks': 'hello world' } },
        { path:'/3', method: 'GET', pattern: { 'mocks': 'hi!' } }
    ];

    getList(): RequestMock[] {
        return this.#mocks;
    }

    getMock(req: RequestSignature): MockPattern {
        return this.#mocks.filter((mock) => isEqual(mock, req))[0].pattern;
    }

    upsertMock(mock: RequestMock) {
        this.#mocks = upsertIn(mock, this.#mocks);
    }

    removeMock(req: RequestSignature) {
        this.#mocks = removeFrom(req, this.#mocks);
    }

}