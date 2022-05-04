import { ConnectionState, OnMessage, WsConnection } from '../types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { parseWsMessage, isServerMessage } from '../../../../../utils';


const { APP_SETTINGS_PORT } = process.env;

const port = APP_SETTINGS_PORT || window.location.port;
const wsUrl = `ws://localhost:${port}/ws`;

export const useWebSocket = (onMessage: OnMessage): WsConnection => {
    const socket = useMemo(() => new WebSocket(wsUrl), []);

    const [state, setState] = useState<ConnectionState>('process');
    const messageHandler = useRef<OnMessage>(() => null);

    useEffect(() => {
        messageHandler.current = onMessage;
    }, [onMessage]);

    useEffect(() => {
        socket.onerror = (error) => console.error(`WS connection error on port ${port}`, error);

        socket.onopen = () => {
            console.info(`WS connected on port: ${port}`);
            setState('connected');
        };

        socket.onclose = () => {
            console.info('WS connection  closed');
            setState('closed');
        };
        socket.onmessage = ({ data }) => {
            try {
                const msgObj = parseWsMessage(data);
                if (isServerMessage(msgObj)) {
                    const { type, body } = msgObj;
                    messageHandler.current && messageHandler.current([type, body]);
                }
            } catch (e) {
                console.error(`WS message error: ${e}`);
            }

        };

        return () => { socket.close(); };

    }, [socket]);

    const send = useCallback(([type, body]) => {
        socket.send(JSON.stringify({ type, body }));
    }, []);

    return useMemo(() => ({ send, state }), [send, state]);
};