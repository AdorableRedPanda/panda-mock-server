import { Method } from '../../../../../../types';

export interface FetchArgs {
    url: string;
    method: Method;
    body: object;
}

export const fetchRequest = (port: string, { url, method, body }: FetchArgs) => {
    const init: RequestInit = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
    };

    if (method !== 'GET') {
        init.body = JSON.stringify(body);
    }

    return fetch(`http://localhost:${port}/${url}`, init);
};