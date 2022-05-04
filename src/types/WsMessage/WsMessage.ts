export interface WsMessage<Type = string, Body = unknown> {
    type: Type;
    body: Body;
}