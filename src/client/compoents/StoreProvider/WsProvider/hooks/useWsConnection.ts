import { useCallback, useEffect, useMemo } from 'react';
import { WsMessageUtils } from '../../../../../utils';
import { WsMessage } from '../../../../../types';
import { WsSender } from '../types';

const wsPort = process.env.APP_SETTINGS_PORT;
const wsUrl = `ws://localhost:${wsPort}/ws`;

export const useWsConnection = <T>(
    handleMessage: (message: WsMessage<T>) => void
) => {
    const socket = useMemo(() => new WebSocket(wsUrl), []);

    const onMessage = useCallback((ev: MessageEvent) => {
        try {
            handleMessage(WsMessageUtils.parse(ev.data));
        } catch (error) {
            console.error(`WS message error:${ error}`);
        }
    }, [handleMessage]);

    useEffect(() => {
        socket.onerror = (error) => console.error(`WS connection error on port ${ wsPort}`, error);
        socket.onopen = () => console.info(`WS connected on port: ${wsPort}`);
        socket.onclose = () => console.info('WS connection  closed');
        socket.onmessage = onMessage;

        return () => { socket.close(); };

    }, [socket]);

    const wsSend: WsSender = useCallback(
        (type, body) => socket.send(WsMessageUtils.buildMessageStr(type, body)),
        []
    );

    return wsSend;
};