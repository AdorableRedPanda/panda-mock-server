import { ConfigService, PatternsStore, MockServerSettings } from '../types';
import { RequestMock } from '../../types';
import { ClientMsgType } from '../../types/WsMessageType';

export class SettingsService implements ConfigService {
    #store: PatternsStore;

    constructor(store: PatternsStore) {
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