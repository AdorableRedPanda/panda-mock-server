import { ClientMsgType, WsMessageType } from './WsMessageType';
import { RequestLog } from './RequestLog';
import { MockServerSettings } from './MockServerSettings';
import { ResponseMockDto } from './ResponseMockDto';

export interface WsMessage<Type extends WsMessageType = WsMessageType, TBody = unknown> {
    type: Type;
    body: TBody;
}

export type ClientMessage = WsMessage<ClientMsgType, ResponseMockDto>

export type ServerMessage = WsMessage<'requests', RequestLog[]> | WsMessage<'settings', MockServerSettings>;
