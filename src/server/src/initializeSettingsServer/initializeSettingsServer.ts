import { LoggerCb } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';

const settingsPort = process.env.APP_SETTINGS_PORT || '9161';

export const initializeSettingsServer = (): LoggerCb => {
    console.log(`settings server is listening port ${settingsPort}`);
    const express = serveStaticData(settingsPort);

    startWsServer(express);

    return console.log;
};