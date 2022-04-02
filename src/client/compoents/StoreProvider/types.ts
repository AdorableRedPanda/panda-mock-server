import { MockActionType, RequestMock, RequestLog } from '../../../types';

export interface StoreState {
    logs: RequestLog[];
    mocks: RequestMock[];
}

interface StoreUpdates extends AddLogs {
    updateMock: (type: MockActionType, newValue: RequestMock | null) => void;
}

export interface AddLogs {
    addLogs: (newItems: RequestLog[]) => void;
}

export type StoreCtx = StoreUpdates & StoreState;