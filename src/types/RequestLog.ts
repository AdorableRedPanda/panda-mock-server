import { Response } from './Response';
import { RequestSignature } from './index';
import { ParsedQs } from 'qs';

export interface RequestLog extends RequestSignature {
    query: ParsedQs;
    body: unknown;
    timestamp: string;
    response: Response;
}