import { useCallback, useEffect, useMemo } from 'react';
import { WsMessageUtils } from '../../../../../utils';
import { WsMessage } from '../../../../../types';
import { WsSender } from '../types';
import { WS_PORT } from '../../../../../constants';

const wsUrl = `ws://localhost:${WS_PORT}/ws`;

export const useWsConnection = (
    handleMessage: (message: WsMessage) => void
): WsSender => {
    const socket = useMemo(() => new WebSocket(wsUrl), []);

    const onMessage = useCallback((ev: MessageEvent) => {
        try {
            handleMessage(WsMessageUtils.parse(ev.data));
        } catch (error) {
            console.error(`WS message error:${ error}`);
        }
    }, [handleMessage]);

    useEffect(() => {
        socket.onerror = (error) => console.error(`WS connection error on port ${WS_PORT}`, error);
        socket.onopen = () => console.info(`WS connected on port: ${WS_PORT}`);
        socket.onclose = () => console.info('WS connection  closed');
        socket.onmessage = onMessage;

        return () => { socket.close(); };

    }, [socket]);

    return useCallback(
        (type, body) => socket.send(WsMessageUtils.buildMessageStr(type, body)),
        []
    );
};