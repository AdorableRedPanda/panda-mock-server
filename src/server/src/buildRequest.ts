import { Method, Request } from '../../types';

export const buildRequest = <T, Q>(
    path: string,
    method: string,
    body: T,
    query: Q
): Request<T|null, Q|{}> => (
    {
        path,
        method: method.toLowerCase() as Method,
        body: body || null,
        query: query || {}
    }
);