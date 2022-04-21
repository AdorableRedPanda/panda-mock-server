import { ClientMsgType, WsMessageType } from './WsMessageType';
import { RequestLog } from './RequestLog';
import { MockServerSettings } from '../server/types';
import { RequestMock } from './RequestMock';

export interface WsMessage<Type extends WsMessageType = WsMessageType, TBody = unknown> {
    type: Type;
    body: TBody;
}

export type ClientMessage = WsMessage<ClientMsgType, RequestMock>

export type ServerMessage = WsMessage<'requests', RequestLog[]> | WsMessage<'settings', MockServerSettings>;
