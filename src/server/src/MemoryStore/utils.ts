import { RequestMock, RequestSignature } from '../../../types';

export const isEqual = (req: RequestSignature, mock: RequestSignature): boolean => mock.method === req.method && mock.path === req.path;

export const removeFrom = <T extends RequestSignature>(req: RequestSignature, mocks: T[]): T[] => mocks.filter((mock) => !isEqual(mock, req));

export const upsertIn = ({ path, method, pattern }: RequestMock, mocks: RequestMock[]): RequestMock[] => {
    const others = removeFrom({ path, method }, mocks);
    return [{ path, method, pattern, variables: [] }, ...others];
};