import { Func, MockServerSettings, SettingsMessage } from '../../../types';
import { MemoryStore } from '../MemoryStore';
import { MOCKS_PORT } from '../../../constants';
import { FilesController } from '../FilesController';

export class SettingsService {
    #filesController = new FilesController();
    #store: MemoryStore;
    readonly #mocksPort;

    #settingsSubscribers: Func<MockServerSettings>[] = [];

    constructor(store: MemoryStore, mocksPort?: string) {
        this.#store = store;
        this.#mocksPort = mocksPort || MOCKS_PORT || null;
    }

    addSettingsSubscription(cb: Func<MockServerSettings>) {
        this.#filesController.subscribeToFiles((files) => cb(this.#buildState(files)));
        this.#settingsSubscribers.push(cb);
    }

    mocksUpdate({ type, body }: SettingsMessage) {
        switch (type) {
            case 'mocks':
                this.#store.handleMessage(body);
                this.getState().then((settings) => this.#settingsSubscribers.forEach((cb) => cb(settings)));
                break;
            case 'files':
                this.#filesController.handleMessage(body, this.#store.getList());
        }
    }

    async getState(): Promise<MockServerSettings> {
        const files = await this.#filesController.getFilesList();
        return this.#buildState(files);
    }

    #buildState(files: string[]): MockServerSettings {
        return {
            port: this.#mocksPort,
            mocks: this.#store.getList(),
            files,
        };
    }
}