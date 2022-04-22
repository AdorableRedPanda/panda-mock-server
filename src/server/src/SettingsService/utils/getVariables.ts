import { Path, pathsSlice, toFlat } from 'red-panda-utils';
import { MockVariable } from '../../../../types';

export const getVariables = (varsMap: Record<string, Path>, template: object): MockVariable[] => {
    const usagesMap = pathsSlice(template)
        .map(toFlat)
        .reduce((prev, [path, leaf]) => {
            if (typeof leaf === 'string' && varsMap[leaf]) {
                prev[leaf] ??= [];
                prev[leaf].push(path);
            }
            return prev;
        }, {} as Record<string, Path[]>);

    return Object.keys(usagesMap).map((key) => ({ selector: varsMap[key], targets: usagesMap[key] }));
};