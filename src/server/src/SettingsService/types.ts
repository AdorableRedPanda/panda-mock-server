import { Func, GetterFunc, MockServerSettings, RequestMock } from '../../../types';
import { ClientMsgType } from '../../../types/WsMessageType';

export interface ConfigService {
    mocksUpdate: Func<[ClientMsgType, RequestMock]>
    getState: GetterFunc<MockServerSettings>;
}