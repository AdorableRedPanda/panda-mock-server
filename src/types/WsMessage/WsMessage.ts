export interface WsMessage<Type = unknown, Body = unknown> {
    type: Type;
    body: Body;
}