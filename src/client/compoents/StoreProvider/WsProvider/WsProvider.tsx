import React, { useMemo } from 'react';
import { WsContext } from './WsContext';
import { useWsConnection } from './hooks/useWsConnection';
import { WsMessage } from '../../../../types';


interface Props {
    messageHandler: (message: WsMessage) => void;
}

export const WsProvider: React.FC<Props> = ({ children, messageHandler }) => {
    const send = useWsConnection(messageHandler);

    const value = useMemo(() => ({ send }), [send]);

    return (
        <WsContext.Provider value={value}>
            {children}
        </WsContext.Provider>
    );
};