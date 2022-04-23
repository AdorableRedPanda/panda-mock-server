import { Resolvers } from '../../../../components/Table';
import { RequestLog, ResponseInternal } from '../../../../../../types';
import { getObjectResolver, timestampResolver } from '../../../resolvers';

export const resolvers: Resolvers<RequestLog> = {
    timestamp: timestampResolver,
    query: getObjectResolver(2),
    body: getObjectResolver(2),
    response: ({ data }: ResponseInternal) => getObjectResolver(2)(data),
};
