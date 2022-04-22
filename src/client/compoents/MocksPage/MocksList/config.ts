import { ColumnsConfig } from '../../atoms';
import { ResponseMockDto } from '../../../../types';
import { anyResolver } from '../../anyResolver';

export const Config: ColumnsConfig<ResponseMockDto> = [
    { label: 'Method', width: '10%', key: 'method', resolver: (str: string) => str.toUpperCase() },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Pattern', width: '25%', key: 'template', resolver: anyResolver },
    { label: 'Pattern', width: '25%', key: 'selectorsMap', resolver: anyResolver },
];