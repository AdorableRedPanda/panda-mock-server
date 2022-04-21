import { RequestMock, RequestLog } from '../../../types';
import { MockServerSettings } from '../../../server/types';

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