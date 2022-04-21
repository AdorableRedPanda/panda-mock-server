import { Func, GetterFunc, RequestExpress, RequestMock, RequestSignature } from '../../../types';

export interface MocksStore {
    getMock: Func<RequestExpress, RequestMock>;
    getList: GetterFunc<RequestMock[]>;
    upsertMock: Func<RequestMock>;
    removeMock: Func<RequestSignature>;
}