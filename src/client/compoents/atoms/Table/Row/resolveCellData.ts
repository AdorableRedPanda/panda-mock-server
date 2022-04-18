import { Resolver } from '../types';

export const resolveCellData = <TRow, Key extends keyof TRow>(
    key: Key,
    row: TRow,
    resolver?: Resolver<TRow[Key]>
): string => {

    const rawValue = row[key];
    if(resolver) {
        return resolver(rawValue);
    }

    if (typeof rawValue !== 'string') {
        return '';
    }

    return rawValue;
};