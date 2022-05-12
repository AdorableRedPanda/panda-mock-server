import { ResponseMock, RequestSignature, MockMessage, MessageHandler } from '../../../types';
import { isMatch, removeFrom, upsertIn } from './utils';
import { buildMock } from '../SettingsService/utils/buildMock';

export class MemoryStore implements MessageHandler<MockMessage> {
    #mocks: ResponseMock[] = [];

    getList(): ResponseMock[] {
        return this.#mocks;
    }

    getMock(req: RequestSignature): ResponseMock | undefined {
        return this.#mocks.find((mock) => isMatch(mock, req));
    }

    #setList(next: ResponseMock[]) {
        this.#mocks = next;
    }

    handleMessage({ type, body }: MockMessage) {
        switch (type) {
            case 'delete':
                this.#removeMock(body);
                break;
            case 'upsert':
                this.#upsertMock(buildMock(body));
                break;
            case '#set_list':
                this.#setList(body);
                break;
        }
    }

    #upsertMock(mock: ResponseMock) {
        this.#mocks = upsertIn(mock, this.#mocks);
    }

    #removeMock(req: RequestSignature) {
        this.#mocks = removeFrom(req, this.#mocks);
    }

}