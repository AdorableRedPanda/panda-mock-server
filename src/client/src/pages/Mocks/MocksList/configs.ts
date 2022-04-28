import { HeadersConfig } from '../../../components';
import { ResponseMock } from '../../../../../types';
import { CellRenderers, renderObject, renderVars } from '../../cellRenderers';

export const MockColumns: HeadersConfig<ResponseMock> = [
    { label: 'Method', width: '10%', key: 'method' },
    { label: 'Path', width: '10%', key: 'path' },
    { label: 'Template', width: '25%', key: 'template' },
    { label: 'Variables', width: '25%', key: 'selectorsMap' },
];

export const ButtonsConf:HeadersConfig = [{ label: '', width: '5%', key: 'button' }];

export const renderers: CellRenderers<ResponseMock> = {
    variables: data => data.variables,
    method: data => data.method,
    path: data => data.path,
    selectorsMap: data => renderVars(data.selectorsMap),
    template: data => renderObject(data.template),
    code: data => data.code,
};