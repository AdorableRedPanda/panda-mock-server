import { WsMessage } from '../types';
import { WsMessageType } from '../types/WsMessageType';

const WsMessageTypes: WsMessageType[] = ['logs', 'test_message', 'mock_update'];

const isWsMessageType = (type: unknown): type is WsMessageType => (
    typeof type === 'string' && WsMessageTypes.includes(type as WsMessageType)
);

const parse = <T>(str: string): WsMessage<T> => {
    const parsed = JSON.parse(str);
    const body = JSON.parse(parsed.body || 'null');
    if (!isWsMessageType(parsed.type)) {
        throw new Error('invalid message type');
    }

    return { type: parsed.type, body } as WsMessage<T>;
};

const buildMessageStr = <T>(type: WsMessageType, body:T): string => JSON.stringify({ type, body });

export const WsMessageUtils = { buildMessageStr, parse };