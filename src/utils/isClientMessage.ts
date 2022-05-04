import { ClientMessage, WsMessage } from '../types';
import { ClientMessageTypes } from '../constants';

export const isClientMessage = (msg: WsMessage): msg is ClientMessage => ClientMessageTypes.includes(msg.type);