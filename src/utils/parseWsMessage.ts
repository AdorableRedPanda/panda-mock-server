import { WsMessage } from '../types';

export const parseWsMessage = (str: string): WsMessage => {
    const parsed = JSON.parse(str);
    const { type, body = null } = parsed;
    if (!type || body === undefined) {
        throw 'invalid ws message type';
    }

    return parsed;
};