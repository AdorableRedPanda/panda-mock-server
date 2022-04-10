import { Method } from '../../../types';
import { MOCKS_PORT } from '../../../constants';


export interface FetchArgs {
    url: string;
    method: Method;
    body: object;
}

export const fetchRequest = ({ url, method, body }: FetchArgs) => {
    const init: RequestInit = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (method !== 'GET') {
        init.body = JSON.stringify(body);
    }

    return fetch(`http://localhost:${MOCKS_PORT}/${url}`, init);
};