import React from 'react';
import { resolveCellData } from './resolveCellData';
import { ColumnsConfig } from '../types';
import { Cell } from '../Cell';

interface Props<TRow> {
    data: TRow;
    columns: ColumnsConfig<TRow>
}

export const Row = <TData, >({ data, columns }: Props<TData>): React.ReactElement => (
    <tr>
        {columns
            .map(({ key, resolver }) => (
                <Cell key={key}>
                    {resolveCellData(key, data, resolver)}
                </Cell>
            ))
        }
    </tr>
);