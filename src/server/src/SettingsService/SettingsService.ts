import { ConfigService } from './types';
import { ClientMsgType } from '../../../types/WsMessageType';
import { MockServerSettings, RequestMock } from '../../../types';
import { MocksStore } from '../MemoryStore';


export class SettingsService implements ConfigService {
    #store: MocksStore;

    constructor(store: MocksStore) {
        this.#store = store;
    }

    mocksUpdate([type, mock]: [ClientMsgType, RequestMock]) {
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