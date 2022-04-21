import { WsMessage, WsMessageType } from '../types';

const WsMessageTypes: WsMessageType[] = ['requests'];

const isWsMessageType = (type: unknown): type is WsMessageType => (
    typeof type === 'string' && WsMessageTypes.includes(type as WsMessageType)
);

const parse = (str: string): WsMessage => {
    const parsed = JSON.parse(str);
    const body = parsed.body || null;
    if (!isWsMessageType(parsed.type)) {
        throw new Error('invalid message type');
    }

    return { type: parsed.type, body } as WsMessage;
};

// todo: remove stringification
const buildMessageStr = <T>(type: WsMessageType, body:T): string => JSON.stringify({ type, body });

export const WsMessageUtils = { buildMessageStr, parse };