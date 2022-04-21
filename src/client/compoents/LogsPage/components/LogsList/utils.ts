import { RequestLog } from '../../../../../types';

export const getLogKey = (
    { timestamp, method, path }: RequestLog,
    index: number,
): string => `${timestamp}_${method}_${path}_${index}`;
