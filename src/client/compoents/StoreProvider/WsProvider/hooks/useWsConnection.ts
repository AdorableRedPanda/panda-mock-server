import { useContext } from 'react';
import { WsContext } from '../WsContext';

export const useWsConnection = () => {
    const context = useContext(WsContext);
    if (!context) {
        throw new Error('useWsSend must be used with WsContext provided');
    }

    return context;
};