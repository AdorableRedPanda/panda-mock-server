import { ResponseMock } from '../../../../../types';

export const getMockKey = ({ method, path }: ResponseMock): string => `${method}_${path}`;