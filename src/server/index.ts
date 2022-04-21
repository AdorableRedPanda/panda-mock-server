import { startHttpListener } from './src/startHttpListener';
import { LoggingService } from './src/LoggingService';
import { WsListener } from './src/WsListener';
import { MemoryStore } from './src/MemoryStore';
import { SettingsService } from './src/SettingsService';
import { MainController } from './src/MainController';
import { MockService } from './src/MockService';

const logsService = new LoggingService();

const store = new MemoryStore();

const mockService = new MockService(logsService, store);
startHttpListener(mockService);

const settings = new SettingsService(store);
const controller = new MainController(logsService, settings);

const wsServer = new WsListener();

wsServer.start(controller);


