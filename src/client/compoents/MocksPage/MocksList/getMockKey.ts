import { RequestMock } from '../../../../types';

export const getMockKey = ({ method, path }: RequestMock): string => `${method}_${path}`;