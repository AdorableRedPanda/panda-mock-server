import { ClientMsgType, WsMessageType } from './WsMessageType';
import { RequestLog } from './RequestLog';
import { RequestMock } from './RequestMock';
import { MockServerSettings } from './MockServerSettings';

export interface WsMessage<Type extends WsMessageType = WsMessageType, TBody = unknown> {
    type: Type;
    body: TBody;
}

export type ClientMessage = WsMessage<ClientMsgType, RequestMock>

export type ServerMessage = WsMessage<'requests', RequestLog[]> | WsMessage<'settings', MockServerSettings>;
