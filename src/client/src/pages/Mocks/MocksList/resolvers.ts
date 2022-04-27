import { CellRenderers } from '../../../components/Table';
import { ResponseMock } from '../../../../../types';
import { renderObject, renderVars } from '../../resolvers';

export const resolvers: CellRenderers<ResponseMock> = {
    selectorsMap: renderVars,
    template: renderObject,
};