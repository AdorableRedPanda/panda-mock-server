import { buildWsMessage } from '../../../utils';
import { Func, WsMessage } from '../../../types';
import { ClientMessage } from '../../../types/WsMessage';
import { LogsProvider } from '../LoggingService';
import { MessagesController } from './types';
import { ConfigService } from '../SettingsService';

export class MainController implements MessagesController {
    #logsService: LogsProvider;
    #settingsService: ConfigService;

    #publicSenders: Func<WsMessage>[] = [];

    constructor(logsService: LogsProvider, settings: ConfigService) {
        this.#settingsService = settings;
        this.#logsService = logsService;

        this.#logsService.subscribe((log) => this.#sendAll({ type: 'requests', body: [log] }));
    }

    handleMessage({ type, body }: ClientMessage): void {
        switch (type) {
            case 'mock_delete':
            case 'mock_upsert':
                this.#settingsService.mocksUpdate([type, body]);
                this.#sendAll({ type: 'settings', body: this.#settingsService.getState() });
                break;
            default:
                console.log(`default: ${type}`);
                return;
        }
    }

    handleConnection(send: Func<WsMessage>) {
        send(buildWsMessage('requests', this.#logsService.getHistory()));
        send(buildWsMessage('settings', this.#settingsService.getState()));
    }

    subscribeOnPublishing(send: Func<WsMessage>) {
        this.#publicSenders.push(send);
    }

    #sendAll(message: WsMessage) {
        this.#publicSenders.forEach(send => send(message));
    }

}