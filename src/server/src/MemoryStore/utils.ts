import { ResponseMock, RequestSignature } from '../../../types';
import { formPath } from '../../../utils';

export const isMatch = (req: RequestSignature, mock: RequestSignature): boolean => mock.method === req.method && mock.path === formPath(req.path);

export const removeFrom = <T extends RequestSignature>(req: RequestSignature, mocks: T[]): T[] => mocks.filter((mock) => !isMatch(mock, req));

export const upsertIn = (mock: ResponseMock, mocks: ResponseMock[]): ResponseMock[] => {
    const others = removeFrom(mock, mocks);
    return [mock, ...others];
};