import { RequestLog } from '../../types';

export type WsLogger = (log: RequestLog) => void;