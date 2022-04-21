import { RequestMock, RequestLog, MockServerSettings } from '../../../types';

export interface StoreState {
    logs: RequestLog[];
    mocks: RequestMock[];
}

interface StoreUpdates extends AddLogs {
    setSettings: (next: MockServerSettings) => void;
}

export interface AddLogs {
    addLogs: (newItems: RequestLog[]) => void;
}

export type StoreCtx = StoreUpdates & StoreState;