import { WsMessage } from '../types';
import { WsMessageType } from '../types/WsMessageType';

const WsMessageTypes: WsMessageType[] = ['logs', 'test_message', 'mock_update'];

const isWsMessageType = (type: unknown): type is WsMessageType => (
    typeof type === 'string' && WsMessageTypes.includes(type as WsMessageType)
);

const isWsMessage = (value: unknown): value is WsMessage<unknown> => {
    if (typeof value !== 'object' || !value) {
        return false;
    }

    if (! ('type' in value) || !('body' in value)) {
        return false;
    }

    return isWsMessageType((value as { type: unknown }).type) && (value as { body: unknown }).body !== undefined;
};

const parse = <T>(str: string): WsMessage<T> => {
    const parsed = JSON.parse(str);
    if (!isWsMessage(parsed)) {
        throw new Error('invalid message format');
    }
    return parsed as WsMessage<T>;
};

const buildMessageStr = <T>(type: WsMessageType, body:T): string => JSON.stringify({ type, body });

export const WsMessageUtils = { buildMessageStr, parse };