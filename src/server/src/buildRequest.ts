import { Method, Request } from '../../types';

export const buildRequest = <T, Q extends object = {}>(
    path: string,
    method: Method,
    body: T,
    query: Q
): Request<T> => (
    {
        path,
        method,
        body: body,
        queryParams: Object.entries(query)
    }
);