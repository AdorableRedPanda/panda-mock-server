import { RequestSignature, MockPattern, RequestMock } from '../../types';
import { MocksStore } from '../types';

const isEqual = (req: RequestSignature, mock: RequestSignature): boolean => mock.method === req.method && mock.path === req.path;

export class MemoryStore implements MocksStore {
    private mocks: RequestMock[] = [];

    constructor() {
        this.getMock.bind(this);
        this.setMock.bind(this);
        this.getList.bind(this);
    }

    public getMock = (req: RequestSignature): MockPattern => {
        const match = this.mocks.filter((mock) => isEqual(mock, req));
        if (!match.length) {
            throw new Error(`${req.method}:${req.path} is not mocked`);
        }

        return match[0].pattern;
    }

    public setMock = (req: RequestSignature, pattern: MockPattern) => {
        const others = this.mocks.filter((mock) => !isEqual(mock, req));
        this.mocks = [...others, { ...req, pattern }];
    }

    public getList = () => this.mocks;
}