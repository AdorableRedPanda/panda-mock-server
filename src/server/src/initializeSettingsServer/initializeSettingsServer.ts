import { RequestsHandler, WsLogger } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';
import { RequestLog } from '../../../types';

export const initializeSettingsServer = (mocker: RequestsHandler): WsLogger => {
    const server = serveStaticData();
    const logs: RequestLog[] = [];

    const wsLogger = startWsServer(server, logs, mocker);

    return (log) => {
        logs.push(log);
        wsLogger(log);
    };
};