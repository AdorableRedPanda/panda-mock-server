import { ResponseInternal } from './ResponseInternal';
import { RequestInternal } from './index';

export interface RequestLog extends RequestInternal {
    response: ResponseInternal;
}