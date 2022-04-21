import { MockPattern, Request, RequestLog, RequestMock, RequestSignature, Response } from '../../types';
import { MainController } from '../src/MainController';


export type Func<TArg, TRes = void> = (arg: TArg) => TRes;
export type GetterFunc<TRes> = Func<void, TRes>;


export interface RequestHandler {
    onRequest: Func<Request, Response>;
}

export interface RequestLogger {
    onRequest: Func<[Request, Response]>;
}

export interface LogsProvider {
    getHistory: GetterFunc<RequestLog[]>;
    subscribe: Func<Func<RequestLog>>;
}

export interface PatternsStore {
    getMock: Func<RequestSignature, MockPattern>;
    getList: GetterFunc<RequestMock[]>;
    upsertMock: Func<RequestMock>;
    removeMock: Func<RequestSignature>;
}

export interface MockServerSettings {
    mocks: RequestMock[];
}

export interface ConfigService {
    upsertMock: Func<RequestMock>;
    removeMock: Func<RequestSignature>;
    getState: GetterFunc<MockServerSettings>;
}

export interface WsServer {
    start: (ctrl: MainController) => void;
}