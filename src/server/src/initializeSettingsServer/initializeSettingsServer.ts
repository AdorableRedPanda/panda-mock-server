import { LoggerCb } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';
import { RequestLog } from '../../../types';

export const initializeSettingsServer = (): LoggerCb => {
    const server = serveStaticData();

    const wsLogger = startWsServer(server);
    return (req, res) => {
        const log: RequestLog = { response: res, ...req };
        console.log('\x1b[33m%s\x1b[0m', log);
        wsLogger(JSON.stringify(log));
    };
};