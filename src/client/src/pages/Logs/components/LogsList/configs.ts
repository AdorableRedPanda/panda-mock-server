import { RequestLog } from '../../../../../../types';
import { HeadersConfig } from '../../../../components';
import { CellRenderers, renderObject, renderTimestamp } from '../../../cellRenderers';

export const RequestColumns: HeadersConfig<RequestLog> = [
    { label: 'Timestamp', width: '5%', key: 'timestamp' },
    { label: 'Method', width: '5%', key: 'method' },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Query params', width: '10%', key: 'query' },
    { label: 'Body', width: '20%', key: 'body' },
    { label: 'Response', width: '20%', key: 'response' },
];

export const ButtonsConf:HeadersConfig = [{ label: '', width: '5%', key: 'button' }];

export const renderers: CellRenderers<RequestLog> = {
    method: data => data.method,
    path: data => data.path,
    timestamp: data => renderTimestamp(data.timestamp),
    query: (data) => renderObject(data.query),
    body: data => renderObject(data.body),
    response: data => renderObject(data.response),
};
