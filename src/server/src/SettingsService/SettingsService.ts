import { ClientMsgType, Func, MockServerSettings, ResponseMockDto } from '../../../types';
import { MemoryStore } from '../MemoryStore';
import { buildMock } from './utils/buildMock';
import { MOCKS_PORT } from '../../../constants';
import { FilesController } from '../FilesController';

export class SettingsService {
    #filesController = new FilesController();
    #store: MemoryStore;
    readonly #mocksPort;

    constructor(store: MemoryStore, mocksPort?: string) {
        this.#store = store;
        this.#mocksPort = mocksPort || MOCKS_PORT || null;
    }

    addSettingsSubscription(cb: Func<MockServerSettings>) {
        this.#filesController.subscribeToFiles((files) => cb(this.#buildState(files)));
    }

    async saveMocks(filename: string) {
        this.#filesController.createFile(filename, this.#store.getList());
    }

    mocksUpdate([type, mockDto]: [ClientMsgType, ResponseMockDto]) {
        const mock = buildMock(mockDto);
        switch (type) {
            case 'mock_delete':
                this.#store.removeMock(mock);
                break;
            case 'mock_upsert':
                this.#store.upsertMock(mock);
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