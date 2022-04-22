import { Request } from 'express';
import { Method, RequestInternal } from '../../../types';

export const toInternal = ({ body, method, query, path }: Request): RequestInternal => {
    const timestamp = (new Date()).toLocaleTimeString();
    return { body: body || {}, method: method as Method, query, path, timestamp };
};
