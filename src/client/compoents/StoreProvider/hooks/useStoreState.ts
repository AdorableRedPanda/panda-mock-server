import { useState } from 'react';
import { RequestMock, RequestLog } from '../../../../types';
import { StoreCtx } from '../types';

export const useStoreState = ():StoreCtx => {
    const [logs, setLogs] = useState<RequestLog[]>([]);
    const [mocks] = useState<RequestMock[]>([]);

    const addLogs = (newItems: RequestLog[]) => {
        setLogs((prev) => [...newItems, ...prev]);
    };

    const updateMock = () => null;

    return { logs, mocks, addLogs, updateMock };
};
