import { RequestSignature } from './RequestSignature';
import { SelectorsMap } from './SelectorsMap';

export interface ResponseMockDto extends RequestSignature {
    code: number;
    template: object;
    selectorsMap: SelectorsMap;
}