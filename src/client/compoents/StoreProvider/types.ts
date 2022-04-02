import { MockActionType, RequestMock, RequestLog } from '../../../types';

export interface StoreState {
    logs: RequestLog[];
    mocks: RequestMock[];
}

interface StoreUpdates {
    addLog: (newItem: RequestLog) => void;
    updateMock: (type: MockActionType, newValue: RequestMock | null) => void;
}

export type StoreCtx = StoreUpdates & StoreState;