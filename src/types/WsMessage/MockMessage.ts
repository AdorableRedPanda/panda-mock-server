import { RequestSignature } from '../RequestSignature';
import { ResponseMockDto } from '../ResponseMockDto';
import { WsMessage } from './WsMessage';

export type MockMessage = WsMessage<'delete', RequestSignature> | WsMessage<'upsert', ResponseMockDto>;