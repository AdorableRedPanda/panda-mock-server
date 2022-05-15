import { WsMessage } from '../types';

export const parseWsMessage = (str: string) => {
    const parsed = JSON.parse(str);
    if (!parsed.hasOwnProperty('type') || !parsed.hasOwnProperty('body')) {
        throw new Error('invalid ws message type');
    }

    return parsed as WsMessage;
};