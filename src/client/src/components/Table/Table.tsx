import { ColumnsConfig, RowComponent } from './types';
import React from 'react';
import { Header } from './Header';
import { Func } from '../../../../types';

interface Props<TData = unknown> {
    columns: ColumnsConfig<TData>;
    rows: TData[];
    selectKey: Func<TData, string>;
    rowComponent: RowComponent<TData>
}

export const Table = <TRow, >({ columns, rows, selectKey, rowComponent: Component }: Props<TRow>) => (
    <table className="table">
        <Header columns={columns} />
        <tbody>
            {rows.map((row) => <Component data={row} key={selectKey(row)} />)}
        </tbody>
    </table>
);