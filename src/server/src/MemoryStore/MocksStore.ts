import { Func, GetterFunc, RequestInternal, ResponseMock, RequestSignature } from '../../../types';

export interface MocksStore {
    getMock: Func<RequestInternal, ResponseMock | undefined>;
    getList: GetterFunc<ResponseMock[]>;
    upsertMock: Func<ResponseMock>;
    removeMock: Func<RequestSignature>;
}