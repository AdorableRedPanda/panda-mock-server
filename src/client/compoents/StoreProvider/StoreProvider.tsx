import React, { useCallback, useMemo } from 'react';
import { StoreContext } from './StoreContext';
import { useStoreState } from './hooks';
import { WsProvider } from './WsProvider';
import { ServerMessage } from '../../../types/WsMessage';

export const StoreProvider: React.FC = ({ children }) => {
    const { logs, mocks, addLogs, setSettings } = useStoreState();

    const onMessage: (message: ServerMessage) => void = useCallback(({ type, body }) => {
        switch (type){
            case 'requests':
                addLogs(body);
                break;
            case 'settings':
                setSettings(body);
                break;
            default:
                console.log('incorrect message: ', type, body);
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
