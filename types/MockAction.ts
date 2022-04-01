import {MockValue} from "./MockValue";

export type MockActionType = 'upsert' | 'delete';

interface MockPattern {
    type: MockActionType;
}

interface UpdateAction extends MockPattern {
    next: MockValue;
}

type DeleteAction = MockPattern;

export type MockAction = UpdateAction | DeleteAction;