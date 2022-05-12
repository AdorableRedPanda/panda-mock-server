import { Func, ClientMessage, MessageHandler, ServerMessage } from '../../../types';
import { LoggingService } from '../LoggingService';
import { SettingsService } from '../SettingsService';

export class CoreController implements MessageHandler<ClientMessage> {
    #logsService: LoggingService;
    #settingsService: SettingsService;

    #publicSenders: Func<ServerMessage>[] = [];

    constructor(logsService: LoggingService, settings: SettingsService) {
        this.#settingsService = settings;
        this.#logsService = logsService;

        this.#settingsService.addSettingsSubscription((settings) => this.#sendAll({ type: 'settings', body: settings }));
        this.#logsService.subscribe((log) => this.#sendAll({ type: 'requests', body: [log] }));
    }

    handleMessage({ type, body }: ClientMessage) {
        switch (type) {
            case 'settings':
                this.#settingsService.mocksUpdate(body);
                break;
            case 'health_check':
                console.log('health_check');
                break;
        }

    }

    handleConnection(send: Func<ServerMessage>) {
        send({ type: 'requests', body: this.#logsService.getHistory() });
        this.#settingsService.getState().then((settings) => send({ type: 'settings', body: settings }));
    }

    subscribeOnPublishing(send: Func<ServerMessage>) {
        this.#publicSenders.push(send);
    }

    #sendAll(message: ServerMessage) {
        this.#publicSenders.forEach((send) => send(message));
    }

}