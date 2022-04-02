import React, { useEffect, useMemo, useState } from 'react';
import { StoreContext } from './constants';
import { useStore } from './hooks';

const wsUrl = `ws://localhost:${process.env.APP_SETTINGS_PORT}/ws`;

export const StoreProvider: React.FC = ({ children }) => {
    const { logs, mocks } = useStore();

    const [input, setInput] = useState('');

    const socket = useMemo(() => new WebSocket(wsUrl), []);

    useEffect(() => {

        socket.onerror = function (this, error) {
            console.error('WebSocket Error: ', error);
        };


        socket.onopen = function (event) {
            console.log(`Connected to: ${JSON.stringify(event)}`);
        };


        socket.onmessage = (message) => {
            try {
                console.log('message', message);
            } catch (error) {
                console.warn(error);
                console.warn('The message does not seem to be valid JSON.');
            }
        };

        socket.onclose = () => console.warn('Closes');

    }, [socket]);

    const sendCb = () => socket.send(JSON.stringify({ text: input }));

    return (
        <StoreContext.Provider value={{ logs, mocks }}>
            <button onClick={sendCb}>send</button>
            <input value={input} onChange={(ev) => setInput(ev.target.value)}/>
            {children}
        </StoreContext.Provider>
    );
};
