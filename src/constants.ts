import { Method } from './types';
import { ClientMsgType, ServerMsgType } from './types/WsMessageType';

export const REST_METHODS: Method[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'];

export const MOCKS_PORT = process.env.APP_MOCKS_PORT;

export const WS_PORT = process.env.APP_SETTINGS_PORT;

export const ClientMsgTypes: ClientMsgType[] = ['mock_upsert', 'mock_delete'];
export const ServerMsgTypes: ServerMsgType[] = ['requests', 'settings'];