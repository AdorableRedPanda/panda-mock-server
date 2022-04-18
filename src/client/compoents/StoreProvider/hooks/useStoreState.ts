import { useState } from 'react';
import { RequestMock, RequestLog } from '../../../../types';
import { StoreCtx } from '../types';

export const useStoreState = ():StoreCtx => {
    const [logs, setLogs] = useState<RequestLog[]>([]);
    const [mocks, setMocks] = useState<RequestMock[]>([]);

    const addLogs = (newItems: RequestLog[]) => {
        setLogs((prev) => [...newItems, ...prev]);
    };

    // todo: remove @ts-ignore
    // @ts-ignore
    const updateMock = (type, data) => {
        console.log(type);
        setMocks(data);
    };

    return { logs, mocks, addLogs, updateMock };
};
