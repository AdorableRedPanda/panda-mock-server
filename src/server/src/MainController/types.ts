import { Func, WsMessage } from '../../../types';
import { ClientMessage } from '../../../types/WsMessage';

export interface MessagesController {
    handleMessage: Func<ClientMessage>;
    handleConnection: Func<Func<WsMessage>>;
    subscribeOnPublishing: Func<Func<WsMessage>>;
}