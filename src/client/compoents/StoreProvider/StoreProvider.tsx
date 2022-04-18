import React, { useCallback, useMemo } from 'react';
import { StoreContext } from './StoreContext';
import { useStoreState } from './hooks';
import { WsProvider } from './WsProvider';
import { WsMessage } from '../../../types';

export const StoreProvider: React.FC = ({ children }) => {
    const { logs, mocks, addLogs, updateMock } = useStoreState();

    const onMessage: (message: WsMessage) => void = useCallback(({ type, body }) => {
        switch (type){
            case 'logs':
                addLogs(body);
                break;
            case 'mock_update':
                // todo: remove @ts-ignore
                // @ts-ignore
                updateMock('upsert', body);
                break;
            default:
                console.log('unknown ws message type');
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
