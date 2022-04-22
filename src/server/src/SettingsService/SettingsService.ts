import { ConfigService } from './types';
import { ClientMsgType, MockServerSettings, ResponseMockDto } from '../../../types';
import { MocksStore } from '../MemoryStore';
import { buildMock } from './utils/buildMock';


export class SettingsService implements ConfigService {
    #store: MocksStore;

    constructor(store: MocksStore) {
        this.#store = store;
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
        return { mocks: this.#store.getList() };
    }
}