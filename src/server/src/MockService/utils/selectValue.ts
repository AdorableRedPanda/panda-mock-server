export const selectValue = (path: string[], root: unknown) =>
    path.reduce((prev, segment) => getSegmentValue(segment, prev), root);

const getSegmentValue = (segment: string, target: unknown) => {
    if (typeof target === 'object' && target && segment in target) {
        return (target as Record<string, unknown>)[segment];
    }

    return null;
};