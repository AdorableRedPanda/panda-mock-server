import { LogsProvider, ConfigService, Func } from '../types';
import { WsMessage } from '../../types';
import { WebSocket } from 'ws';

export class MainController {
    #logsService: LogsProvider;
    #settingsService: ConfigService;

    #publicSenders: Func<WsMessage>[] = [];

    constructor(logsService: LogsProvider, settings: ConfigService) {
        this.#settingsService = settings;
        this.#logsService = logsService;

        this.#logsService.subscribe((log) => this.#sendAll({ type: 'requests', body: [log] }));
    }

    handleMessage({ type, body }: WsMessage): void {
        switch (type) {
            case 'mock_upsert':
                this.#settingsService.upsertMock(body);
                this.#sendAll({ type: 'settings', body: this.#settingsService.getState() });
            default:
                return;
        }
    }

    handleConnection(ws: WebSocket) {
        ws.send(JSON.stringify({ type: 'requests', body: this.#logsService.getHistory() }));
        ws.send(JSON.stringify({ type: 'settings', body: this.#settingsService.getState() }));
    }

    subscribeOnPublishing(send: Func<WsMessage>) {
        this.#publicSenders.push(send);
    }

    #sendAll(message: WsMessage) {
        this.#publicSenders.forEach(send => send(message));
    }

}