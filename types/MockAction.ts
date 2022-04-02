import { RequestMock } from './RequestMock';

export type MockActionType = 'upsert' | 'delete';

interface MockPattern {
    type: MockActionType;
}

interface UpdateAction extends MockPattern {
    next: RequestMock;
}

type DeleteAction = MockPattern;

export type MockAction = UpdateAction | DeleteAction;