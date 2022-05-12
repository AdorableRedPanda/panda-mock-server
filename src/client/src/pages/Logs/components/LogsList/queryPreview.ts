import { ParsedQs } from 'qs';

const stringifyValue = (value: unknown) => {
    if (typeof value === 'string') {
        return value;
    }

    return JSON.stringify(value);
};

export const queryPreview = (value: ParsedQs) => (
    Object
        .entries(value)
        .map(([key, value]) => `${key}=${stringifyValue(value)}`)
        .join('&')
);