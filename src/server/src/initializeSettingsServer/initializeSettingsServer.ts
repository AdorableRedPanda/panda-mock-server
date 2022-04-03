import { LoggerCb } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';
import { RequestLog } from '../../../types';

export const initializeSettingsServer = (): LoggerCb => {
    const server = serveStaticData();

    // todo: move to service
    const logs: RequestLog[] = [];

    const wsLogger = startWsServer(server, logs);

    return (req, res) => {
        const timestamp = (new Date()).toLocaleTimeString();
        const log: RequestLog = { response: res, ...req, timestamp };
        logs.push(log);
        console.log('\x1b[33m%s\x1b[0m', log);
        wsLogger(log);
    };
};