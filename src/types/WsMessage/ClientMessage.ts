import { WsMessage } from './WsMessage';
import { SettingsMessage } from './SettingsMessage';

export type ClientMessage = WsMessage<'settings', SettingsMessage>;