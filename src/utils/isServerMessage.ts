import { WsMessageType } from '../types';
import { ServerMessage, WsMessage } from '../types/WsMessage';
import { ServerMsgTypes } from '../constants';

export const isServerMessage = (msg: WsMessage): msg is ServerMessage => (
    (ServerMsgTypes as WsMessageType[]).includes(msg.type)
);