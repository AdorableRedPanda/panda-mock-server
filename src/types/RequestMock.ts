import { RequestSignature } from './RequestSignature';

export interface RequestMock extends RequestSignature {
    pattern: string;
    variables: string[];
}