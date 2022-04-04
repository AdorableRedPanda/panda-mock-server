import { WsLogger } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';
import { RequestLog } from '../../../types';

export const initializeSettingsServer = (): WsLogger => {
    const server = serveStaticData();
    const logs: RequestLog[] = [];

    const wsLogger = startWsServer(server, logs);

    return (log) => {
        logs.push(log);
        wsLogger(log);
    };
};