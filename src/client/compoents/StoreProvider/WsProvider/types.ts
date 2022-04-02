import { WsMessageType } from '../../../../types/WsMessageType';

export interface WsCtx {
    send: WsSender;
}

export type WsSender = <T>(type: WsMessageType, body: T) => void;