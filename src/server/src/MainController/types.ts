import { Func, WsMessage, ClientMessage } from '../../../types';

export interface MessagesController {
    handleMessage: Func<ClientMessage>;
    handleConnection: Func<Func<WsMessage>>;
    subscribeOnPublishing: Func<Func<WsMessage>>;
}