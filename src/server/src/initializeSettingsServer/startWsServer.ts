import { WebSocket, WebSocketServer } from 'ws';
import http from 'http';
import { WsMessageUtils } from '../../../utils';

export const startWsServer = (server: http.Server) => {
    const ws_server = new WebSocketServer({ server });

    const connections: WebSocket[] = [];

    ws_server.on('connection', (ws) => {

        connections.push(ws);

        ws.on('message', (message) => {
            // todo: subscribe to config the mocker here
            console.log('\x1b[36m%s\x1b[0m', `ws message: ${ message.toString()}`);
        });
    });

    return (message: string) => connections.forEach((ws) => ws.send(WsMessageUtils.buildMessageStr('logs', message)));
};