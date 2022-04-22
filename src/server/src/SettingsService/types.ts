import { Func, GetterFunc, MockServerSettings, ClientMsgType, ResponseMockDto } from '../../../types';

export interface ConfigService {
    mocksUpdate: Func<[ClientMsgType, ResponseMockDto]>
    getState: GetterFunc<MockServerSettings>;
}