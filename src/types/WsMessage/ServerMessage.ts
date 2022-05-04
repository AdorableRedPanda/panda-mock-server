import { WsMessage } from './WsMessage';
import { RequestLog } from '../RequestLog';
import { MockServerSettings } from '../MockServerSettings';

export type ServerMessage = WsMessage<'requests', RequestLog[]> | WsMessage<'settings', MockServerSettings>;