import { RequestLog } from '../../../../../types';
import { Resolver } from '../../../atoms';
import { QueryParam } from '../../../../../types/QueryParams';

export const getLogKey = (
    { timestamp, method, path }: RequestLog,
    index: number,
): string => `${timestamp}_${method}_${path}_${index}`;

export const paramsResolver: Resolver<QueryParam[]> = (params) => ('');
    // params.map(([key, value]) =>`${key}=${value}`).join(', ')