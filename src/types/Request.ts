import { RequestSignature } from './RequestSignature';
import { ParsedQs } from 'qs';

export interface Request<T = object> extends RequestSignature {
    body: T;
    params: ParsedQs;
}