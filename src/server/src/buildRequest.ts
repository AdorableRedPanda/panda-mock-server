import { Method, Request } from '../../types';

export const buildRequest = <T, Q extends object = {}>(
    path: string,
    method: Method,
    body: T,
    query: Q
): Request<T|null> => (
    {
        path,
        method,
        body: body || null,
        queryParams: Object.entries(query)
    }
);