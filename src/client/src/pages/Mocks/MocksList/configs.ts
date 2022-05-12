import { CellRenderers, HeadersConfig } from '../../../components';
import { ResponseMock } from '../../../../../types';
import { renderObject, renderVars } from '../../cellRenderers';

export const MockColumns: HeadersConfig<ResponseMock> = [
    { label: 'Method', width: '10%', key: 'method' },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Template', width: '25%', key: 'template' },
    { label: 'Variables', width: '25%', key: 'selectorsMap' },
];

export const renderers: CellRenderers<ResponseMock> = {
    selectorsMap: (map) => renderVars(map),
    template: (template) => renderObject(template),
};

export const keySelector = (mock: ResponseMock) => `${mock.path}-${mock.method}`;