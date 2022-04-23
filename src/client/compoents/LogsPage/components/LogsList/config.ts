import { ColumnsConfig } from '../../../atoms';
import { RequestLog } from '../../../../../types';

export const Config: ColumnsConfig<RequestLog> = [
    { label: 'Timestamp', width: '5%', key: 'timestamp' },
    { label: 'Method', width: '5%', key: 'method' },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Query params', width: '10%', key: 'query' },
    { label: 'Body', width: '20%', key: 'body' },
    { label: 'Response', width: '25%', key: 'response' },
];