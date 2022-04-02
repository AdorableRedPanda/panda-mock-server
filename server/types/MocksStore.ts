import {MockPattern, RequestMock, RequestSignature} from "../../types";

export interface MocksStore {
    getMock(req: RequestSignature): MockPattern;
    setMock(req: RequestSignature, pattern: MockPattern): void;
    getList(): RequestMock[];
}