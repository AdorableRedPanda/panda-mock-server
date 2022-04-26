import { ConfigService } from './types';
import { ClientMsgType, MockServerSettings, ResponseMockDto } from '../../../types';
import { MocksStore } from '../MemoryStore';
import { buildMock } from './utils/buildMock';
import { MOCKS_PORT } from '../../../constants';

export class SettingsService implements ConfigService {
    #store: MocksStore;
    readonly #mocksPort;

    constructor(store: MocksStore, mocksPort?: string) {
        this.#store = store;
        this.#mocksPort = mocksPort || MOCKS_PORT || null;
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

    getState(): MockServerSettings {
        return { port: this.#mocksPort, mocks: this.#store.getList() };
    }
}