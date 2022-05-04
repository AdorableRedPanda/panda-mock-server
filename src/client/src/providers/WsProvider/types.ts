import { Func, WsMessage, ServerMsgType, ServerMsgBody } from '../../../../types';


export type ConnectionState = 'connected' | 'closed' | 'process';

export type OnMessage<T extends ServerMsgType = ServerMsgType> = Func<[T, ServerMsgBody<T>]>;

export type ListenerHandler<T extends ServerMsgType> = Func<[T, Func<ServerMsgBody<T>>]>;

export type SubscriptionListeners = Record<ServerMsgType, Func<ServerMsgBody<ServerMsgType>>[]>;

export interface WsSubscription {
    subscribe: ListenerHandler<ServerMsgType>;
    unsubscribe: ListenerHandler<ServerMsgType>;
}

export interface ListenersHook extends WsSubscription {
    onMessage: OnMessage;
}

export interface WsConnection {
    state: ConnectionState;
    send: Func<WsMessage>;
}

export type WsCtx = WsConnection & WsSubscription;