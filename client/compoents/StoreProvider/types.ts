import {MockActionType, MockValue, RequestLog} from "../../../types";

export interface StoreState {
    logs: RequestLog[];
    mocks: MockValue[];
}

interface StoreUpdates {
    addLog: (newItem: RequestLog) => void;
    updateMock: (type: MockActionType, newValue: MockValue | null) => void;
}

export type StoreCtx = StoreUpdates & StoreState;