import React from 'react';
import { resolveCellData } from './resolveCellData';
import { ColumnsConfig, CellRenderers } from '../types';
import { Cell } from './Cell';

interface Props<TRow> {
    data: TRow;
    columns: ColumnsConfig<TRow>;
    renderers: CellRenderers<TRow>;
}

export const TableRow = <TData, >({ data, columns, renderers }: Props<TData>): React.ReactElement => (
    <tr className="table_row">
        {columns
            .map(({ key }) => (
                <Cell key={key}>
                    {resolveCellData(key, data, renderers[key])}
                </Cell>
            ))
        }
    </tr>
);