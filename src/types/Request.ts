import { RequestSignature } from './RequestSignature';
import { QueryParam } from './QueryParams';

export interface Request<T = null> extends RequestSignature {
    body: T;
    queryParams: QueryParam[];
}