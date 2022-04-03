import { WebSocket, WebSocketServer } from 'ws';
import http from 'http';
import { RequestLog, WsMessageType } from '../../../types';
import { WsMessageUtils } from '../../../utils';

export const startWsServer = (server: http.Server, logsHistory: RequestLog[]) => {
    const ws_server = new WebSocketServer({ server });

    const connections: WebSocket[] = [];

    const sendToAll = <T>(type: WsMessageType, body:T) =>
        connections.forEach((ws) => ws.send(WsMessageUtils.buildMessageStr(type, body)));

    ws_server.on('connection', (ws) => {
        connections.push(ws);
        ws.send(WsMessageUtils.buildMessageStr('logs', logsHistory));

        ws.on('message', (message) => {
            // todo: subscribe to config the mocker here
            console.log('\x1b[36m%s\x1b[0m', `ws message: ${ message.toString()}`);
        });
    });

    return (log: RequestLog) => sendToAll('logs', [log]);
};