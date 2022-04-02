import { LoggerCb } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';

export const initializeSettingsServer = (): LoggerCb => {
    const server = serveStaticData();

    startWsServer(server);

    return console.log;
};