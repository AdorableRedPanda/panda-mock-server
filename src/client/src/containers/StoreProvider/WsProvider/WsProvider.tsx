import React from 'react';
import { WsContext } from './WsContext';
import { useWebSocket } from './hooks/useWebSocket';
import { WsMessage } from '../../../../../types';

interface Props {
    messageHandler: (message: WsMessage) => void;
}

export const WsProvider: React.FC<Props> = ({ children, messageHandler }) => {
    const contextValue = useWebSocket(messageHandler);

    return (
        <WsContext.Provider value={contextValue}>
            {children}
        </WsContext.Provider>
    );
};