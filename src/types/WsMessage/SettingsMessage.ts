import { WsMessage } from './WsMessage';
import { MockMessage } from './MockMessage';
import { FileMessage } from './FileMessage';

export type SettingsMessage =
    WsMessage<'mocks', MockMessage> |
    WsMessage<'files', FileMessage> |
    WsMessage<'mocks_from_file', string>;