import { ResponseMock } from './ResponseMock';

export interface MockServerSettings {
    mocks: ResponseMock[];
    port: string | null;
    files: string[];
}