import { useState } from 'react';
import { MockServerSettings, RequestLog } from '../../../../types';
import { StoreCtx } from '../types';


export const useStoreState = ():StoreCtx => {
    const [logs, setLogs] = useState<RequestLog[]>([]);
    const [settings, setSettings] = useState<MockServerSettings>({ mocks: [] });

    const addLogs = (newItems: RequestLog[]) => {
        setLogs((prev) => [...newItems, ...prev]);
    };


    return { logs, mocks: settings.mocks, addLogs, setSettings };
};
