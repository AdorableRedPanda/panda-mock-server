import { WebSocket, WebSocketServer } from 'ws';
import { startStaticServer } from './startStaticServer';
import { WsServer } from '../types';
import { WsMessage } from '../../types';
import { MainController } from './MainController';
import { parseWsMessage } from '../../utils';
import { isClientMessage } from '../../utils/isClientMessage';

export class WsListener implements WsServer {
    #httpServer = startStaticServer();
    #connections: WebSocket[] = [];

    start (controller: MainController) {
        const ws_server = new WebSocketServer({ server: this.#httpServer });

        controller.subscribeOnPublishing((message) => this.#sendToAll(message));

        ws_server.on('connection', (ws) => {
            this.#connections.push(ws);

            controller.handleConnection((message) => WsListener.sendTo(message, ws));

            ws.on('message', (rawMessage) => {
                try {
                    const messageObj = parseWsMessage(rawMessage.toString());
                    if (!isClientMessage(messageObj)) {
                        console.log(`A received message has incorrect type: ${messageObj.type}`);
                        return;
                    }
                    controller.handleMessage(messageObj);
                } catch (e) {
                    console.log(e);
                }
            });

            ws.on('close', () => {
                this.#connections = this.#connections.filter(connection => connection !== ws);
            });
        });
    }

    static sendTo(message: WsMessage, ws: WebSocket) {
        ws.send(JSON.stringify(message));
    }

    #sendToAll(message: WsMessage) {
        this.#connections.forEach((ws) => WsListener.sendTo(message, ws));
    }

}