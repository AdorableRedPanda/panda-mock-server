import { LoggerCb, RequestsHandler } from '../../types';
import { serveStaticData } from './serveStaticData';
import { startWsServer } from './startWsServer';

const settingsPort = process.env.APP_SETTINGS_PORT || '9161';

export const initializeSettingsServer = (mocker: RequestsHandler): LoggerCb => {
    const express = serveStaticData(settingsPort);

    startWsServer(express);

    return console.log;
};