import { WsMessageType } from '../types';

const types: WsMessageType[] = ['mock_upsert', 'mock_delete', 'settings', 'requests'];

export const isWsMessageType = (value: unknown): value is WsMessageType => (
    (typeof value === 'string') && (types as string[]).includes(value)
);