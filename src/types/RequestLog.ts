import { RequestSignature } from './RequestSignature';
import { Response } from './Response';

export interface RequestLog<T = unknown> extends RequestSignature {
    response: Response<T>;
}