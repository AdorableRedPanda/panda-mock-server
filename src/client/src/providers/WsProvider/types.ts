import { ClientMsgType, Func, ServerMsgType, WsMessageType } from '../../../../types';
import { MessageBody } from '../../../../types/WsMessage';

export type ConnectionState = 'connected' | 'closed' | 'process';

type MessageCb<T extends WsMessageType> = Func<MessageBody<T>>;

export type OnMessage<T extends WsMessageType> = Func<[T, MessageBody<T>]>;

export type ListenerHandler = Func<[ServerMsgType, MessageCb<ServerMsgType>]>;

export type SubscriptionListeners = Record<ServerMsgType, MessageCb<ServerMsgType>[]>;

export interface WsSubscription {
    subscribe: ListenerHandler;
    unsubscribe: ListenerHandler;
}

export interface ListenersHook extends WsSubscription {
    onMessage: OnMessage<ServerMsgType>;
}

export interface WsConnection {
    state: ConnectionState;
    send: OnMessage<ClientMsgType>;
}

export type WsCtx = WsConnection & WsSubscription;