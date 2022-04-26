import React, { useState } from 'react';
import { RequestLog } from '../../../types';
import { useStrictContext } from './useStrictContext';
import { useWsSubscription } from './WsProvider';

const LogsContext = React.createContext<RequestLog[] | null>(null);

export const LogsStore: React.FC = ({ children }) => {
    const [logs, setLogs] = useState<RequestLog[]>([]);

    const addLogs = (newItems: RequestLog[]) => {
        setLogs((prev) => [...newItems, ...prev]);
    };

    useWsSubscription('requests', addLogs);


    return <LogsContext.Provider value={logs} children={children}/>;
};

export const useLogsHistory = () => useStrictContext(LogsContext, 'useLogsHistory', 'LogsContext');