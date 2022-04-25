import { startHttpListener } from './src/startHttpListener';
import { LoggingService } from './src/LoggingService';
import { WsListener } from './src/WsListener';
import { MemoryStore } from './src/MemoryStore';
import { SettingsService } from './src/SettingsService';
import { MainController } from './src/MainController';
import { MockService } from './src/MockService';

export const serverStart = (
    mocksPort?: string,
    settingsPort?: string,
) => {

    const logsService = new LoggingService();

    const store = new MemoryStore();

    const mockService = new MockService(logsService, store);
    startHttpListener(mockService, mocksPort);

    const settings = new SettingsService(store, mocksPort);
    const controller = new MainController(logsService, settings);

    const wsServer = new WsListener(settingsPort);

    wsServer.start(controller);
};