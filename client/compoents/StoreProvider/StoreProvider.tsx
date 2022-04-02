import React from 'react';
import { StoreContext } from './constants';
import { useStore } from './hooks';

const wsUrl = `wss://localhost:${process.env.APP_SETTINGS_PORT}`;

const useWs = () => {
    console.log(`! useWs ${wsUrl}`);
};

export const StoreProvider: React.FC = ({ children }) => {
    const { logs, mocks } = useStore();

    useWs();

    return (
        <StoreContext.Provider value={{ logs, mocks }}>
            {children}
        </StoreContext.Provider>
    );
};
