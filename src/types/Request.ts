import { RequestSignature } from './RequestSignature';
import { QueryParam } from './QueryParams';

export interface Request<T = object> extends RequestSignature {
    body: T;
    queryParams: QueryParam[];
}