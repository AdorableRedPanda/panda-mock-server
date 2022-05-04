import { Func, WsMessage, ClientMessage, MessageHandler } from '../../../types';
import { LoggingService } from '../LoggingService';
import { SettingsService } from '../SettingsService';

export class CoreController implements MessageHandler<ClientMessage> {
    #logsService: LoggingService;
    #settingsService: SettingsService;

    #publicSenders: Func<WsMessage>[] = [];

    constructor(logsService: LoggingService, settings: SettingsService) {
        this.#settingsService = settings;
        this.#logsService = logsService;

        this.#settingsService.addSettingsSubscription(settings => this.#sendAll({ type: 'settings', body: settings }));
        this.#logsService.subscribe((log) => this.#sendAll({ type: 'requests', body: [log] }));
    }

    handleMessage({ body }: ClientMessage) {
        this.#settingsService.mocksUpdate(body);
    }

    handleConnection(send: Func<WsMessage>) {
        send({ type: 'requests', body: this.#logsService.getHistory() });
        this.#settingsService.getState().then(settings => send({ type: 'settings', body: settings }));
    }

    subscribeOnPublishing(send: Func<WsMessage>) {
        this.#publicSenders.push(send);
    }

    #sendAll(message: WsMessage) {
        this.#publicSenders.forEach(send => send(message));
    }

}