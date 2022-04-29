import { buildWsMessage } from '../../../utils';
import { Func, WsMessage, ClientMessage } from '../../../types';
import { LoggingService } from '../LoggingService';
import { SettingsService } from '../SettingsService';
import { MessageBody } from '../../../types/WsMessage';

export class CoreController {
    #logsService: LoggingService;
    #settingsService: SettingsService;

    #publicSenders: Func<WsMessage>[] = [];

    constructor(logsService: LoggingService, settings: SettingsService) {
        this.#settingsService = settings;
        this.#logsService = logsService;

        this.#settingsService.addSettingsSubscription(settings => this.#sendAll({ type: 'settings', body: settings }));
        this.#logsService.subscribe((log) => this.#sendAll({ type: 'requests', body: [log] }));
    }

    async handleMessage({ type, body }: ClientMessage) {
        switch (type) {
            case 'mock_delete':
            case 'mock_upsert':
                this.#settingsService.mocksUpdate([type, body as MessageBody<'mock_upsert'>]);
                this.#sendAll(buildWsMessage('settings', await this.#settingsService.getState()));
                break;
            case 'save_mocks':
                break;
            default:

                return;
        }
    }

    async handleConnection(send: Func<WsMessage>) {
        send(buildWsMessage('requests', this.#logsService.getHistory()));
        send(buildWsMessage('settings', await this.#settingsService.getState()));
    }

    subscribeOnPublishing(send: Func<WsMessage>) {
        this.#publicSenders.push(send);
    }

    #sendAll(message: WsMessage) {
        this.#publicSenders.forEach(send => send(message));
    }

}