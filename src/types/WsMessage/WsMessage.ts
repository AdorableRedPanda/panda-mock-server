// todo: use tuples, now it loses types while rest destructuring
export interface WsMessage<Type = string, Body = unknown> {
    type: Type;
    body: Body;
}