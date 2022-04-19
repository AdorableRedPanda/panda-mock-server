import { WebSocket, WebSocketServer } from 'ws';
import http from 'http';
import { RequestLog, WsMessageType } from '../../../types';
import { WsMessageUtils } from '../../../utils';
import { RequestsHandler, WsLogger } from '../../types';

export const startWsServer = (
    server: http.Server,
    logsHistory: RequestLog[],
    mocker: RequestsHandler,
): WsLogger => {
    const ws_server = new WebSocketServer({ server });

    const connections: WebSocket[] = [];

    const sendToAll = <T>(type: WsMessageType, body:T) =>
        connections.forEach((ws) => ws.send(WsMessageUtils.buildMessageStr(type, body)));

    ws_server.on('connection', (ws) => {
        connections.push(ws);
        ws.send(WsMessageUtils.buildMessageStr('logs', logsHistory.slice().reverse()));

        ws.send(WsMessageUtils.buildMessageStr('mock_update', mocker.getMocksList()));

        ws.on('message', (message) => {
            // todo: subscribe to config the mocker here
            try {
                const messageStr = message.toString();
                const messageObj = JSON.parse(messageStr);
                mocker.setMock(messageObj.body);
                sendToAll('mock_update', mocker.getMocksList());
                console.log('\x1b[36m%s\x1b[0m', `mock request: ${ JSON.stringify(messageObj.body) }`);
            } catch (e) {
                console.error(e);
            }
        });
    });

    return (log: RequestLog) => sendToAll('logs', [log]);
};