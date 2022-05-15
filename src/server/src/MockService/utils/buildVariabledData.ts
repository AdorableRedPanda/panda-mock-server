import { selectValue } from './selectValue';
import { createPathObject } from 'red-panda-utils';
import { MockVariable } from '../../../../types';

export const resolveVariable = (data: unknown, { selector, targets }: MockVariable) => {
    const variableValue = selectValue(selector, data);

    return targets.map((path) => createPathObject([path, variableValue]));
};