import { RequestSignature } from '../RequestSignature';
import { ResponseMockDto } from '../ResponseMockDto';
import { WsMessage } from './WsMessage';
import { ResponseMock } from '../ResponseMock';

export type MockMessage =
    WsMessage<'delete', RequestSignature> |
    WsMessage<'upsert', ResponseMockDto> |
    WsMessage<'#set_list', ResponseMock[]>;