import { ClientMsgType, ServerMsgType, WsMessageType } from './WsMessageType';
import { RequestLog } from './RequestLog';
import { MockServerSettings } from './MockServerSettings';
import { ResponseMockDto } from './ResponseMockDto';

export interface WsMessage<Type extends WsMessageType = WsMessageType> {
    type: Type;
    body: MessageBody<Type>;
}

export type MessageBody<Type extends WsMessageType> =
    Type extends 'requests' ? RequestLog[]:
        Type extends 'settings' ? MockServerSettings: ResponseMockDto;

export type ClientMessage = WsMessage<ClientMsgType>;

export type ServerMessage = WsMessage<ServerMsgType>;
