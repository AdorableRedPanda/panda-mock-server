import { RequestLog } from '../../../../../../types';
import { CellRenderers, HeadersConfig } from '../../../../components';
import { renderObject, renderTimestamp } from '../../../cellRenderers';
import { queryPreview } from './queryPreview';

export const RequestColumns: HeadersConfig<RequestLog> = [
    { label: 'Timestamp', width: '5%', key: 'timestamp' },
    { label: 'Method', width: '5%', key: 'method' },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Query params', width: '10%', key: 'query' },
    { label: 'Body', width: '20%', key: 'body' },
    { label: 'Response', width: '20%', key: 'response' },
];

export const renderers: CellRenderers<RequestLog> = {
    timestamp: (timestamp) => renderTimestamp(timestamp),
    query: (query) => queryPreview(query),
    body: (body) => renderObject(body),
    response: (response) => renderObject(response),
};

export const keySelector = (row: RequestLog) => row.timestamp.toString();