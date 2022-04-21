import { WsMessageType } from './WsMessageType';
import { RequestLog } from './RequestLog';
import { MockServerSettings } from '../server/types';

interface Message<Type extends WsMessageType, TBody> {
    type: Type;
    body: TBody;
}

export type WsMessage =
    Message<'requests', RequestLog[]> |
    Message<'settings', MockServerSettings> |
    Message<'mock_upsert', any>;