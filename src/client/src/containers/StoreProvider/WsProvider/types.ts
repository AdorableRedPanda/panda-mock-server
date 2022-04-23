import { WsMessageType } from '../../../../../types';


export interface WsCtx {
    send: WsSender;
    state: ConnectionState;
}

export type WsSender = <T>(type: WsMessageType, body: T) => void;

export type ConnectionState = 'connected' | 'closed' | 'process';