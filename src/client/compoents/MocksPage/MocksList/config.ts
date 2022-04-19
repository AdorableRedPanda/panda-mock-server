import { ColumnsConfig } from '../../atoms';
import { RequestMock } from '../../../../types';
import { anyResolver } from '../../anyResolver';

export const Config: ColumnsConfig<RequestMock> = [
    { label: 'Method', width: '10%', key: 'method', resolver: (str: string) => str.toUpperCase() },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Pattern', width: '25%', key: 'pattern', resolver: anyResolver }
];