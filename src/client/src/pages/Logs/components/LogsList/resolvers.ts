import { CellRenderers } from '../../../../components/Table';
import { RequestLog } from '../../../../../../types';
import { renderObject, renderTimestamp } from '../../../resolvers';

export const resolvers: CellRenderers<RequestLog> = {
    timestamp: renderTimestamp,
    query: renderObject,
    body: renderObject,
    response: renderObject,
};
