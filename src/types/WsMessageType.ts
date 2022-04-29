export type ServerMsgType = 'settings' | 'requests';

export type ClientMsgType = 'mock_upsert' | 'mock_delete' | 'save_mocks';

export type WsMessageType = ServerMsgType | ClientMsgType;