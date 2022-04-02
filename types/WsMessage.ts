import {WsMessageType} from "./WsMessageType";

export interface WsMessage<T> {
    type: WsMessageType;
    body: T;
}