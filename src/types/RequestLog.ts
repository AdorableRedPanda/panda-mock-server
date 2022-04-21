import { Response } from './Response';
import { Request } from './Request';

export interface RequestLog extends Request {
    timestamp: string;
    response: Response;
}