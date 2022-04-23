import React from 'react';
import { resolveCellData } from './resolveCellData';
import { ColumnsConfig, Resolvers } from '../types';
import { Cell } from './Cell';

interface Props<TRow> {
    data: TRow;
    columns: ColumnsConfig<TRow>;
    resolvers: Resolvers<TRow>;
}

export const TableRow = <TData, >({ data, columns, resolvers }: Props<TData>): React.ReactElement => (
    <tr className="table_row">
        {columns
            .map(({ key }) => (
                <Cell key={key}>
                    {resolveCellData(key, data, resolvers[key])}
                </Cell>
            ))
        }
    </tr>
);