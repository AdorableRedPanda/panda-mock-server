import { ConfigService, PatternsStore, MockServerSettings } from '../types';
import { RequestMock, RequestSignature } from '../../types';

export class SettingsService implements ConfigService {
    #store: PatternsStore;

    constructor(store: PatternsStore) {
        this.#store = store;
    }

    removeMock(signature: RequestSignature) {
        return this.#store.removeMock(signature);
    }

    upsertMock(mock: RequestMock) {
        return this.#store.upsertMock(mock);
    }

    getState(): MockServerSettings {
        return { mocks: this.#store.getList() };
    }
}