import { WsMessageType } from '../types';

export const buildWsMessage = <T>(type: WsMessageType, body:T) => ({ type, body });