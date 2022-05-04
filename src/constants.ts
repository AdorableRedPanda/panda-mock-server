import { Method } from './types';

export const REST_METHODS: Method[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

export const MOCKS_PORT = process.env.APP_MOCKS_PORT;
export const WS_PORT = process.env.APP_SETTINGS_PORT;

export const ServerMessageTypes = ['requests', 'settings'];
export const ClientMessageTypes = ['settings'];