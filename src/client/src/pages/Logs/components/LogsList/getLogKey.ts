import { RequestLog } from '../../../../../../types';

export const getLogKey = (log: RequestLog) => log.timestamp.toString();
