import { RequestSignature } from './RequestSignature';
import { Path } from 'red-panda-utils';

export interface ResponseMockDto extends RequestSignature {
    code: number;
    template: object;
    selectorsMap: Record<string, Path>;
}