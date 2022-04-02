import { WebSocketServer } from 'ws';
import { Express } from 'express';

export const startWsServer = (express: Express) => {
    const ws_server = new WebSocketServer({
        noServer: true,
        path: '/ws'
    });

    ws_server.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log(`message: ${ message.toString()}`);
            ws.send(`Hi, you sent me: ${message}`);
        });
    });

    express.on('upgrade', (request, socket, head) => {
        console.log('upgrade:', request, socket, head);
        ws_server.handleUpgrade(request, socket, head, (websocket) => {
            ws_server.emit('connection', websocket, request);
        });
    });

};