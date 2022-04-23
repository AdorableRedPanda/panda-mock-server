import { Resolvers } from '../../../components/Table';
import { ResponseMock } from '../../../../../types';
import { getObjectResolver } from '../../resolvers';

export const resolvers: Resolvers<ResponseMock> = {
    selectorsMap: getObjectResolver(2),
    template: getObjectResolver(2),
};