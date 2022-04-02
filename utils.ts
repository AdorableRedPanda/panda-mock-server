import {WsMessage} from "./types/WsMessage";
import {WsMessageType} from "./types/WsMessageType";

const isWsMessageType = (type: unknown): type is WsMessageType => (
    typeof type === 'string' && (type === 'log' || type === 'mockUpdate')
)

const isWsMessage = (value: unknown): value is WsMessage<unknown> => {
    if (typeof value !== 'object' || !value) {
        return false;
    }

    if (! ('type' in value) || !('body' in value)) {
        return false;
    }

    return isWsMessageType((value as any).type) && (value as any).body !== undefined;
}

const parse = <T>(str: string): WsMessage<T> => {
    const parsed = JSON.parse(str);
    if (!isWsMessage(parsed)) {
        throw new Error('invalid message format')
    }
    return parsed as WsMessage<any>;
}

const build = <T>(type: WsMessageType, body:T): WsMessage<T> => ({type, body});

export const WsMessage = {build, parse};