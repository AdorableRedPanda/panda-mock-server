import { ServerMessage, WsMessage } from '../types';
import { ServerMessageTypes } from '../constants';

export const isServerMessage = (msg: WsMessage): msg is ServerMessage => ServerMessageTypes.includes(msg.type);