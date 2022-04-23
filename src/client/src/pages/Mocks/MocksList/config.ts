import { ColumnsConfig } from '../../../components';
import { ResponseMockDto } from '../../../../../types';

export const Config: ColumnsConfig<ResponseMockDto> = [
    { label: 'Method', width: '10%', key: 'method' },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Template', width: '25%', key: 'template' },
    { label: 'Variables', width: '25%', key: 'selectorsMap' },
];