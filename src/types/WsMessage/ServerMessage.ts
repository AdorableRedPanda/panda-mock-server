import { WsMessage } from './WsMessage';
import { RequestLog } from '../RequestLog';
import { MockServerSettings } from '../MockServerSettings';

export type ServerMsgType = 'requests' | 'settings';
export type ServerMsgBody<T extends ServerMsgType> =
    T extends 'requests' ? RequestLog[] :
        T extends 'settings' ? MockServerSettings :
            never;

export type ServerMessage<T extends ServerMsgType = ServerMsgType> = WsMessage<T, ServerMsgBody<T>>;