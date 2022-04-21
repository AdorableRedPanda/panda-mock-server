import { WebSocket, WebSocketServer } from 'ws';
import { startStaticServer } from './startStaticServer';
import { WsServer } from '../types';
import { WsMessage } from '../../types';
import { MainController } from './MainController';


export class WsListener implements WsServer {
    #httpServer = startStaticServer();

    #connections: WebSocket[] = [];

    start (controller: MainController) {
        const ws_server = new WebSocketServer({ server: this.#httpServer });

        controller.subscribeOnPublishing((message) => this.#sendToAll(message));

        ws_server.on('connection', (ws) => {
            this.#connections.push(ws);

            controller.handleConnection(ws);

            ws.on('message', (message) => {
                try {
                    // todo: parsing in utils
                    const messageObj = JSON.parse(message.toString()) as WsMessage;
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

    #sendToAll(message: WsMessage) {
        this.#connections.forEach(ws => ws.send(JSON.stringify(message)));
    }

}