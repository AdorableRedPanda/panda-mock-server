import { ResponseMockDto } from './ResponseMockDto';
import { MockVariable } from './MockVariable';

export interface ResponseMock extends ResponseMockDto {
    variables: MockVariable[];
}