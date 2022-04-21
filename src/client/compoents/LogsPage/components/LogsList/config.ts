import { ColumnsConfig } from '../../../atoms';
import { RequestLog } from '../../../../../types';
import { anyResolver } from '../../../anyResolver';

export const Config: ColumnsConfig<RequestLog> = [
    { label: 'Timestamp', width: '10%', key: 'timestamp' },
    { label: 'Method', width: '10%', key: 'method', resolver: (str: string) => str.toUpperCase() },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Query params', width: '10%', key: 'query', resolver: anyResolver },
    { label: 'Body', width: '20%', key: 'body', resolver: anyResolver },
    { label: 'Response', width: '25%', key: 'response', resolver: anyResolver }
];