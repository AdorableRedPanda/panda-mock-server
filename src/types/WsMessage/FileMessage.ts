import { WsMessage } from './WsMessage';

export type FileMessage = WsMessage<'delete' | 'create', string>;