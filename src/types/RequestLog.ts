import { ResponseInternal } from './ResponseInternal';
import { RequestSignature } from './index';
import { ParsedQs } from 'qs';

export interface RequestLog extends RequestSignature {
    query: ParsedQs;
    body: object;
    timestamp: string;
    response: ResponseInternal;
}