import { WsMessageType, ServerMessage, WsMessage } from '../types';
import { ServerMsgTypes } from '../constants';

export const isServerMessage = (msg: WsMessage): msg is ServerMessage => (
    (ServerMsgTypes as WsMessageType[]).includes(msg.type)
);