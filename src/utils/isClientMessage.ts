import { ClientMessage, WsMessage } from '../types/WsMessage';
import { WsMessageType } from '../types';
import { ClientMsgTypes } from '../constants';

export const isClientMessage = (msg: WsMessage): msg is ClientMessage => (
    (ClientMsgTypes as WsMessageType[]).includes(msg.type)
);