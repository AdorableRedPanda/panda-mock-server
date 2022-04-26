import React, { useMemo } from 'react';
import { useEventsListeners } from './hooks/useEventsListeners';
import { WsCtx } from './types';
import { useWebSocket } from './hooks/useWebSocket';

export const WsContext = React.createContext<WsCtx | null>(null);

export const WsProvider: React.FC = ({ children }) => {
    const { onMessage, subscribe, unsubscribe } = useEventsListeners();

    const { state, send } = useWebSocket(onMessage);

    const contextValue = useMemo(() => ({ subscribe, unsubscribe, state, send }), [send, subscribe, state, unsubscribe]);

    return (
        <WsContext.Provider value={contextValue}>
            {children}
        </WsContext.Provider>
    );
};




