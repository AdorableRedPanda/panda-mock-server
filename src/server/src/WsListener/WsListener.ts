import { parseWsMessage } from '../../../utils';
import { WebSocketServer, WebSocket } from 'ws';
import { isClientMessage } from '../../../utils/isClientMessage';
import { CoreController } from '../CoreController';
import { WsMessage } from '../../../types';
import { startStaticServer } from './startStaticServer';
import http from 'http';

export class WsListener {
    readonly #httpServer: http.Server;
    #connections: WebSocket[] = [];

    constructor(settingsPort?: string) {
        this.#httpServer = startStaticServer(settingsPort);
    }

    start (controller: CoreController) {
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