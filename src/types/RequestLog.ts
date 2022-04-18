import { Response } from './Response';
import { Method } from './Method';
import { QueryParam } from './QueryParams';

export interface RequestLog<TBody = object> {
    timestamp: string;
    method: Method;
    path: string;
    params: QueryParam[];
    body: TBody;
    response: Response<TBody>;
}