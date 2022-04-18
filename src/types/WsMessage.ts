import { WsMessageType } from './WsMessageType';
import { RequestLog } from './RequestLog';

interface Message<Type extends WsMessageType, TBody> {
    type: Type;
    body: TBody;
}

export type WsMessage = Message<'logs', RequestLog[]> | Message<'mock_update', unknown>;