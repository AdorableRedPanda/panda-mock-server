import { WsMessage } from '../types';
import { isWsMessageType } from './isWsMessageType';

export const parseWsMessage = (str: string): WsMessage => {
    const parsed = JSON.parse(str);
    const { type, body = null } = parsed;
    if (!type || !isWsMessageType(type)) {
        throw 'invalid ws message type';
    }

    return ({ type, body });
};