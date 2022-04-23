import { RequestSignature } from './RequestSignature';
import { ParsedQs } from 'qs';

export interface RequestInternal extends RequestSignature {
    body: object;
    query: ParsedQs;
    timestamp: number;
}