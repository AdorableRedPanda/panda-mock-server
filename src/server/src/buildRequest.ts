import { Method, Request } from '../../types';

export const buildRequest = <T, Q extends object = {}>(
    path: string,
    method: string,
    body: T,
    query: Q
): Request<T|null> => (
    {
        path,
        method: method.toLowerCase() as Method,
        body: body || null,
        queryParams: Object.entries(query)
    }
);