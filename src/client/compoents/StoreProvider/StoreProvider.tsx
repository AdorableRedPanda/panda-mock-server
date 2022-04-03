import React, { useCallback, useMemo } from 'react';
import { StoreContext } from './StoreContext';
import { useStoreState } from './hooks';
import { WsProvider } from './WsProvider';
import { WsMessage } from '../../../types';

export const StoreProvider: React.FC = ({ children }) => {
    const { logs, mocks, addLogs } = useStoreState();

    const onMessage: (message: WsMessage) => void = useCallback(({ type, body }) => {
        if (type === 'logs') {
            addLogs(body);
        }
    }, [addLogs]);

    const value = useMemo(() => ({ logs, mocks }), [logs, mocks]);

    return (
        <StoreContext.Provider value={value}>
            <WsProvider messageHandler={onMessage}>
                {children}
            </WsProvider>
        </StoreContext.Provider>
    );
};
