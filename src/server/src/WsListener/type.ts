import { MessagesController } from '../MainController';

export interface WsServer {
    start: (ctrl: MessagesController) => void;
}