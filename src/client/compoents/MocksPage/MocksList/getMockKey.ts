import { RequestMock } from '../../../../types';

export const getMockKey = (
    { method, path, pattern }: RequestMock,
    index: number,
): string => `${pattern}_${method}_${path}_${index}`;