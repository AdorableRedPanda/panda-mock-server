import {useState} from "react";
import {RequestMock, RequestLog} from "../../../../types";
import {StoreCtx} from "../types";

export const useStore = ():StoreCtx => {
    const [logs, setLogs] = useState<RequestLog[]>([]);
    const [mocks, setMocks] = useState<RequestMock[]>([]);

    const addLog = (newItem: RequestLog) => {
        setLogs((prev) => [newItem, ...prev])
    }

    const updateMock = () => null;

    return {logs, mocks, addLog, updateMock}
}