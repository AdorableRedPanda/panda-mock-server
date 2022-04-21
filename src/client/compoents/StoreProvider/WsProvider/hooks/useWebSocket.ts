import { useCallback, useEffect, useMemo, useState } from 'react';
import { WsMessageUtils } from '../../../../../utils';
import { WsMessage } from '../../../../../types';
import { ConnectionState, WsCtx } from '../types';
import { WS_PORT } from '../../../../../constants';

const wsUrl = `ws://localhost:${WS_PORT}/ws`;

export const useWebSocket = (
    handleMessage: (message: WsMessage) => void
): WsCtx => {
    const socket = useMemo(() => new WebSocket(wsUrl), []);

    const [state, setState] = useState<ConnectionState>('process');

    const onMessage = useCallback((ev: MessageEvent) => {
        try {
            handleMessage(JSON.parse(ev.data));
        } catch (error) {
            console.error(`WS message error:${ error}`);
        }
    }, [handleMessage]);

    useEffect(() => {
        socket.onerror = (error) => console.error(`WS connection error on port ${WS_PORT}`, error);

        socket.onopen = () => {
            console.info(`WS connected on port: ${WS_PORT}`);
            setState('connected');
        };

        socket.onclose = () => {
            console.info('WS connection  closed');
            setState('closed');
        };
        socket.onmessage = onMessage;

        return () => { socket.close(); };

    }, [socket]);

    const send = useCallback(
        (type, body) => socket.send(WsMessageUtils.buildMessageStr(type, body)),
        []
    );

    return useMemo(() => ({ send, state }), [state]);
};