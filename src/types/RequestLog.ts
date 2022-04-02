import { Response } from './Response';
import { Request } from './Request';

export interface RequestLog<T = unknown> extends Request {
    response: Response<T>;
}