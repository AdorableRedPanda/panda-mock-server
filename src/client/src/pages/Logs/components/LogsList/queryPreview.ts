import { ParsedQs } from 'qs';

const stringifyValue = (value: unknown) => {
    if (typeof value === 'string') {
        return value;
    }

    return JSON.stringify(value);
};

export const queryPreview = (value: ParsedQs) => {
    const entries = Object.entries(value);

    if (!entries.length) {
        return '';
    }

    return entries
        .map(([key, value]) => `${key}=${stringifyValue(value)}`)
        .join('&');
};