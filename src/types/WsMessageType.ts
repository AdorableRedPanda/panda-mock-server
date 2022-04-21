export type ServerMsgType = 'settings' | 'requests';

export type ClientMsgType = 'mock_upsert' | 'mock_delete';

export type WsMessageType = ServerMsgType | ClientMsgType;