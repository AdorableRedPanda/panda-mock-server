import { WebSocketServer } from 'ws';
import http from 'http';

export const startWsServer = (server: http.Server) => {
    const ws_server = new WebSocketServer({ server });

    ws_server.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log(`message: ${ message.toString()}`);
            ws.send(`Hi, you sent me: ${message}`);
        });
    });
};