import { useContext } from 'react';
import { WsContext } from '../WsContext';

export const useWsSend = () => {
    const context = useContext(WsContext);
    if (!context) {
        throw new Error('useWsSend must be used with WsContext provided');
    }

    return context.send;
};